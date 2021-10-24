$.fn.range = function (cfg) {
    cfg = cfg || {};

    var $input = $(this);

    if (cfg.hasOwnProperty('min'))
        $input.attr('min', cfg.min);

    if (cfg.hasOwnProperty('max'))
        $input.attr('max', cfg.max);

    if (cfg.hasOwnProperty('step'))
        $input.attr('step', cfg.step);

    if (cfg.hasOwnProperty('value'))
        $input.val(cfg.value);

    function changeHandler(e) {
        var max = Number($input.attr('max'));
        var min = Number($input.attr('min'));

        var thisval = Number($input.val());

        var bfb = Math.floor((thisval - min) * 100 / (max - min));
        $input.css('background-size', bfb + '% 100%');
        $input.attr('title', thisval);

        if (e && cfg.hasOwnProperty('onChange') && e.type !== "change")//IE下去掉  e.type !== "change"
            cfg.onChange(thisval, bfb);

        return $input;
    }


    $input.change(changeHandler);
    $input.on('input propertychange', changeHandler);

    changeHandler();

    return this;
};