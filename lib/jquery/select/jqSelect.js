//下拉框
;(function ($) {
  //下拉菜单默认参数
  var defaluts = {
    select: 'mp_select',
    select_text: 'mp_select_text',
    select_ul: 'mp_select_ul',
  }

  $.fn.extend({
    // 下拉菜单
    // 下拉菜单
    select: function (options) {
      var opts = $.extend({}, defaluts, options)
      return this.each(function () {
        var that = $(this)
        //模拟下拉列表
        if (that.data('value') !== undefined && that.data('value') !== '') {
          that.val(that.data('value'))
        }
        var _html = []
        _html.push('<div class="' + that.attr('class') + '">')
        _html.push('<div class="' + opts.select_text + '">' + that.find(':selected').text() + '</div>')
        _html.push('<ul class="' + opts.select_ul + '">')
        that.children('option').each(function () {
          var option = $(this)
          if (that.data('value') == option.val()) {
            _html.push('<li data-value="' + option.val() + '">' + option.text() + '</li>')
          } else {
            _html.push('<li data-value="' + option.val() + '">' + option.text() + '</li>')
          }
        })
        _html.push('</ul>')
        _html.push('</div>')
        var select = $(_html.join(''))
        var select_text = select.find('.' + opts.select_text)
        var select_ul = select.find('.' + opts.select_ul)
        that.after(select)
        that.hide()

        that.change(function () {
          var val = that.attr('data-value')
          that.children('option').each(function () {
            var option = $(this)
            if (val == option.val()) {
              select_text.text(option.text())
            }
          })
        })

        //下拉列表操作
        select.click(function (event) {
          $(this).toggleClass('mp_selected')
          $(this)
            .find('.' + opts.select_ul)
            .slideToggle()
            .end()
            .siblings('div.' + opts.select)
            .find('.' + opts.select_ul)
            .slideUp()
          event.stopPropagation()
        })
        $('body').click(function () {
          select_ul.slideUp()
        })
        select_ul.on('click', 'li', function () {
          var li = $(this)
          var val = li.addClass('selecton').siblings('li').removeClass('selecton').end().data('value').toString()
          if (val !== that.attr('data-value')) {
            select_text.text(li.text())
            that.attr('data-value', val)
            that.change()
          }
        })
      })
    },
  })
})(jQuery)
