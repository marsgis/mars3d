//通过Canvas绘制复杂或动态对象的图标点Graphic
class CanvasBillboard extends mars3d.graphic.BillboardEntity {
  /**
   * 文字
   * @type {string}
   */
  get text() {
    return this.style.text;
  }
  set text(val) {
    this.style.text = val;
    this._updateCanvas();
  }

  /**
   * 对象添加到图层前创建一些对象的钩子方法，
   * 只会调用一次
   * @return {void}  无
   * @private
   */
  _mountedHook() {
    super._mountedHook();

    //图片对象
    this.style.imageUrl = "img/marker/textPnl.png";
    this.style.width = 300;
    this.style.height = 140;

    if (!this._canvas) {
      this._canvas = document.createElement("canvas");
      this._canvas.width = this.style.width;
      this._canvas.height = this.style.height;
    }

    if (!this._pngImage) {
      let img = new Image(this.style.width, this.style.height);
      img.crossOrigin = "Anonymous";
      img.src = this.style.imageUrl;
      img.onload = () => {
        this._pngImage = img;
        this._updateCanvas();
      };
    }
    this._updateCanvas();
  }

  //创建canvas
  _updateCanvas() {
    if (!this._pngImage || !this._canvas) {
      return;
    }

    let canvas = this._canvas;
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //绘制图片
    ctx.drawImage(this._pngImage, 0, 0);

    //绘制文字
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.font = "55px 楷体";
    ctx.textBaseline = "middle";
    ctx.fillText("温度：", 20, canvas.height / 2);
    ctx.fillText(this.style.text, 160, canvas.height / 2);
    ctx.fillText("℃", 220, canvas.height / 2);

    let newImg = new Image(canvas.width, canvas.height);
    newImg.src = canvas.toDataURL("image/png");

    //将图片赋予给矢量对象进行显示，this.image是父类的属性
    this.image = newImg;
  }
}
mars3d.graphic.CanvasBillboard = CanvasBillboard;
