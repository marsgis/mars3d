/**
 * 分层的楼栋 模型对象
 *
 * @class FloorGraphic
 * @extends {mars3d.graphic.BasePointEntity}
 */
class FloorGraphic extends mars3d.graphic.BasePointEntity {
  /**
   * 对象添加到图层前创建一些对象的钩子方法，
   * 只会调用一次
   * @return {void}  无
   * @private
   */
  _mountedHook() {
    this._models = [];

    let point = this.point; //楼栋位置
    let floorHeight = this.style.spacing; //每层层高,单位:米
    let floorCount = this.style.count; //总层数（不含楼顶）

    //增加楼层
    for (let i = 0; i < floorCount; i++) {
      let alt = point.alt + i * floorHeight;
      let model = new mars3d.graphic.ModelEntity({
        position: [point.lng, point.lat, alt],
        style: this.style,
        attr: {
          origAlt: alt, //记录原始高度
        },
      });
      this._models.push(model);
    }

    //增加楼顶
    let topAlt = point.alt + floorCount * floorHeight;
    let topModel = new mars3d.graphic.ModelEntity({
      position: [point.lng, point.lat, topAlt],
      style: {
        ...this.style,
        url: this.style.topUrl,
      },
      attr: {
        origAlt: topAlt, //记录原始高度
      },
    });
    this._models.push(topModel);
  }

  /**
   * 对象添加到图层上的创建钩子方法，
   * 每次add时都会调用
   * @return {void}  无
   * @private
   */
  _addedHook() {
    this._models.forEach((model) => {
      this._layer.addGraphic(model);
    });
  }

  /**
   * 对象从图层上移除的创建钩子方法，
   * 每次remove时都会调用
   * @return {void}  无
   * @private
   */
  _removedHook() {
    this._models.forEach((model) => {
      this._layer.removeGraphic(model);
    });
  }

  /**
   * 展开所有楼层
   *
   * @param {number} height 展开的每层间隔高度，单位：米
   * @param {number} [time=4] 完全展开时间,单位:秒
   * @return {void}  无
   */
  openAll(height, time = 4) {
    this.reset();

    let point = this.point; //楼栋位置

    for (let i = 0; i < this._models.length; i++) {
      let model = this._models[i];

      let alt = i * height + model.attr.origAlt;
      model.moveTo({
        position: [point.lng, point.lat, alt],
        time: time, //移动的时长(单位 秒)
      });
    }
  }

  /**
   * 合并所有楼层
   *
   * @param {number} [time=4] 完成合并时间,单位:秒
   * @memberof FloorGraphic
   */
  mergeAll(time = 4) {
    let point = this.point; //楼栋位置

    for (let i = 0; i < this._models.length; i++) {
      let model = this._models[i];

      model.show = true;
      model.moveTo({
        position: [point.lng, point.lat, model.attr.origAlt],
        time: time, //移动的时长(单位 秒)
      });
    }
  }

  /**
   * 还原重置所有楼层
   * @return {void}  无
   */
  reset() {
    let point = this.point; //楼栋位置

    for (let i = 0; i < this._models.length; i++) {
      let model = this._models[i];

      model.position = new mars3d.LatLngPoint(point.lng, point.lat, model.attr.origAlt);
      model.show = true;
    }
  }

  /**
   * 显示指定楼层
   *
   * @param {Number} floorNum 指定显示的楼层，第1层开始
   * @param {Number} [time=1] 楼层下落需要时间,单位:秒
   * @return {void}  无
   */
  showFloor(floorNum, time = 1) {
    floorNum--;

    let point = this.point; //楼栋位置
    let maxHeight = 120; //顶部落下的高度

    for (let i = floorNum; i < this._models.length; i++) {
      let model = this._models[i];
      model.position = new mars3d.LatLngPoint(point.lng, point.lat, maxHeight);
      model.show = false;
    }

    for (let j = 0; j <= floorNum; j++) {
      let model = this._models[j];

      model.show = true;
      model.moveTo({
        position: [point.lng, point.lat, model.attr.origAlt],
        time: time, //移动的时长(单位 秒)
      });
    }
  }
}
