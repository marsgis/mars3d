var btnbar = {
  canMove: true,
  picDiv: null,
  positionl: 0,
  picwidth: 170,
  maxWidth: NaN,
  fundata: {},
  init: function (arrdata) {
    if (!document.getElementById('btnbar')) {
      $('body').prepend(
        '<div class="btnbar"> <div class="btnbar_panel"> <div class="btnbar_left"></div> <div class="btnbar_items_panel"><div class="btnbar_items_panel_scroll">  </div></div><div class="btnbar_right"></div>   </div></div>'
      )
    }

    var inhtml = ''
    for (var i = 0; i < arrdata.length; i++) {
      var item = arrdata[i]
      inhtml += '<div class="btnbar_item">' + item.name + '</div>'
      this.fundata[item.name] = item
    }
    $('.btnbar_items_panel_scroll').html(inhtml)

    this.picDiv = $('.btnbar_items_panel_scroll')
    this.maxWidth = 800 - arrdata.length * (this.picwidth + 5)

    $('.btnbar_item').bind('click', function () {
      $(this).addClass('btnbar_item_select').siblings().removeClass('btnbar_item_select')

      var _text = $(this).text()
      btnbar.fundata[_text].click()
    })

    if (this.maxWidth > 0) {
      $('.btnbar_left').hide()
      $('.btnbar_right').hide()
      this.picDiv.animate({ left: this.maxWidth / 2 + 'px' })
    } else {
      $('.btnbar_left').bind('click', function () {
        btnbar.moveToLeft()
      })
      $('.btnbar_right').bind('click', function () {
        btnbar.moveToRight()
      })
    }
  },
  //左移
  moveToLeft: function () {
    if (this.positionl >= 0) {
      return
    }

    this.positionl += this.picwidth
    if (this.positionl >= 0) {
      this.positionl = 0
    }
    this.picDiv.animate({ left: this.positionl + 'px' })
  },
  //右移
  moveToRight: function () {
    if (this.positionl <= this.maxWidth) {
      return
    }

    this.positionl -= this.picwidth
    if (this.positionl <= this.maxWidth) {
      this.positionl = this.maxWidth
    }
    this.picDiv.animate({ left: this.positionl + 'px' })
  },
  unSelect: function () {
    $('.btnbar_item').each(function () {
      $(this).removeClass('btnbar_item_select')
    })
  },
}
