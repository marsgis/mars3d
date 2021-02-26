'use script' //开发环境建议开启严格模式

/**
 * 自定义的 DataSource
 */
class MyGlobeDataSource {
  constructor(name) {
    this._name = name

    this._changed = new Cesium.Event()
    this._error = new Cesium.Event()
    this._loading = new Cesium.Event()
    this._isLoading = false

    this._entityCollection = new Cesium.EntityCollection()
    this._seriesNames = []
    this._seriesToDisplay = undefined
    this._heightScale = 2000000
    this._entityCluster = new Cesium.EntityCluster()
  }

  get name() {
    return this._name
  }
  get entities() {
    return this._entityCollection
  }
  get isLoading() {
    return this._isLoading
  }
  get changedEvent() {
    return this._changed
  }
  get errorEvent() {
    return this._error
  }
  get loadingEvent() {
    return this._loading
  }
  get seriesNames() {
    return this._seriesNames
  }

  /**
   * Gets or sets the name of the series to display.  WebGL JSON is designed
   * so that only one series is viewed at a time.  Valid values are defined
   * in the seriesNames property.
   * @memberof WebGLGlobeDataSource.prototype
   * @type {String}
   */
  get seriesToDisplay() {
    return this._seriesToDisplay
  }
  set seriesToDisplay(value) {
    this._seriesToDisplay = value

    //Iterate over all entities and set their show property
    //to true only if they are part of the current series.
    var collection = this._entityCollection
    var entities = collection.values
    collection.suspendEvents()
    for (var i = 0; i < entities.length; i++) {
      var entity = entities[i]
      entity.show = value === entity.seriesName
    }
    collection.resumeEvents()
  }
  /**
   * Gets or sets the scale factor applied to the height of each line.
   * @memberof WebGLGlobeDataSource.prototype
   * @type {Number}
   */
  get heightScale() {
    return this._heightScale
  }
  set heightScale(value) {
    if (value > 0) {
      throw new Cesium.DeveloperError('value must be greater than 0')
    }
    this._heightScale = value
  }

  /**
   * Gets whether or not this data source should be displayed.
   * @memberof WebGLGlobeDataSource.prototype
   * @type {Boolean}
   */
  get show() {
    return this._entityCollection
  }
  set show(value) {
    this._entityCollection = value
  }

  /**
   * Gets or sets the clustering options for this data source. This object can be shared between multiple data sources.
   * @memberof WebGLGlobeDataSource.prototype
   * @type {EntityCluster}
   */
  get clustering() {
    return this._entityCluster
  }
  set clustering(value) {
    if (!Cesium.defined(value)) {
      throw new Cesium.DeveloperError('value must be defined.')
    }
    this._entityCluster = value
  }

  /**
   * Asynchronously loads the GeoJSON at the provided url, replacing any existing data.
   * @param {Object} url The url to be processed.
   * @returns {Promise} a promise that will resolve when the GeoJSON is loaded.
   */
  loadUrl(url) {
    if (!Cesium.defined(url)) {
      throw new Cesium.DeveloperError('url is required.')
    }

    //Create a name based on the url
    var name = Cesium.getFilenameFromUri(url)

    //Set the name if it is different than the current name.
    if (this._name !== name) {
      this._name = name
      this._changed.raiseEvent(this)
    }

    //Use 'when' to load the URL into a json object
    //and then process is with the `load` function.
    var that = this
    return Cesium.Resource.fetchJson(url)
      .then(function (json) {
        return that.load(json, url)
      })
      .otherwise(function (error) {
        //Otherwise will catch any errors or exceptions that occur
        //during the promise processing. When this happens,
        //we raise the error event and reject the promise.
        this._setLoading(false)
        that._error.raiseEvent(that, error)
        return Cesium.when.reject(error)
      })
  }

  /**
   * Loads the provided data, replacing any existing data.
   * @param {Array} data The object to be processed.
   */
  load(data) {
    //>>includeStart('debug', pragmas.debug);
    if (!Cesium.defined(data)) {
      throw new Cesium.DeveloperError('data is required.')
    }
    //>>includeEnd('debug');

    //Clear out any data that might already exist.
    this._setLoading(true)
    this._seriesNames.length = 0
    this._seriesToDisplay = undefined

    var heightScale = this.heightScale
    var entities = this._entityCollection

    //It's a good idea to suspend events when making changes to a
    //large amount of entities.  This will cause events to be batched up
    //into the minimal amount of function calls and all take place at the
    //end of processing (when resumeEvents is called).
    entities.suspendEvents()
    entities.removeAll()

    //WebGL Globe JSON is an array of series, where each series itself is an
    //array of two items, the first containing the series name and the second
    //being an array of repeating latitude, longitude, height values.
    //
    //Here's a more visual example.
    //[["series1",[latitude, longitude, height, ... ]
    // ["series2",[latitude, longitude, height, ... ]]

    // Loop over each series
    for (var x = 0; x < data.length; x++) {
      var series = data[x]
      var seriesName = series[0]
      var coordinates = series[1]

      //Add the name of the series to our list of possible values.
      this._seriesNames.push(seriesName)

      //Make the first series the show one by default
      var show = x === 0
      if (show) {
        this._seriesToDisplay = seriesName
      }

      //Now loop over each coordinate in the series and create
      // our entities from the data.
      for (var i = 0; i < coordinates.length; i += 3) {
        var latitude = coordinates[i]
        var longitude = coordinates[i + 1]
        var height = coordinates[i + 2]

        //Ignore lines of zero height.
        if (height === 0) {
          continue
        }

        var color = Cesium.Color.fromHsl(0.6 - height * 0.5, 1.0, 0.5)
        var surfacePosition = Cesium.Cartesian3.fromDegrees(longitude, latitude, 0)
        var heightPosition = Cesium.Cartesian3.fromDegrees(longitude, latitude, height * heightScale)

        //WebGL Globe only contains lines, so that's the only graphics we create.
        var polyline = new Cesium.PolylineGraphics()
        polyline.material = new Cesium.ColorMaterialProperty(color)
        polyline.width = new Cesium.ConstantProperty(4)
        polyline.followSurface = new Cesium.ConstantProperty(false)
        polyline.positions = new Cesium.ConstantProperty([surfacePosition, heightPosition])

        //The polyline instance itself needs to be on an entity.
        var entity = new Cesium.Entity({
          id: seriesName + ' 年 ' + i.toString(),
          show: show,
          polyline: polyline,
          seriesName: seriesName, //Custom property to indicate series name
        })

        //Add the entity to the collection.
        entities.add(entity)
      }
    }

    //Once all data is processed, call resumeEvents and raise the changed event.
    entities.resumeEvents()
    this._changed.raiseEvent(this)
    this._setLoading(false)
  }

  _setLoading(isLoading) {
    if (this._isLoading !== isLoading) {
      this._isLoading = isLoading
      this._loading.raiseEvent(this, isLoading)
    }
  }
}
