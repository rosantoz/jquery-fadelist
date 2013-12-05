/**
 * jQuery.fadelist 
 * Date: 27/11/2013
 * @author Rodrigo dos Santos - twitter.com/rosantoz
 */
$.fn.fadelist = function (options) {
    return this.each(function () {

        var defaults = {
            show: 5,
            fade: 1500
        };

        var settings = $.extend(defaults, options)
            , slider = this
            , current = 0
            , gallery = $(this)
            , galleryItems = gallery.children('li').not('.hideItem')
            , length = galleryItems.length
            , intShow = parseInt(settings.show);



        if (slider.loop) {
            clearInterval(slider.loop);
        }

        var slide = function () {
            for (var i = current; i < (current + intShow); i++) {
                galleryItems.eq(i).fadeOut(settings.fade, function () {
                    galleryItems.slice(current, current + intShow).fadeIn(settings.fade);
                });
            }
            current += intShow;
            if (current >= length) current = 0;
        };

        var start = function () {
            galleryItems.show();
            gallery.children('li:gt(' + (intShow - 1) + ')').not('.hideItem').hide();
            if (length > intShow) {
                slider.loop = setInterval(function () {
                    slide();
                }, 5000);
            }
        };

        start();

    });
}
