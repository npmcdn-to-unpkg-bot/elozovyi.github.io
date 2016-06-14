(function($) {
    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    var pixelsOffset = 125;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 125;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

    rightUIEl.click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 125;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

    $.fn.fancybox=function(options) {
        var defaults = {
            overlayColor: 'rgba(0, 0, 0, 0.5)'
        };
        var settings = $.extend(defaults, options);

        var $link = this;
        var $body = $('body');
        var $modal;
        var $overlay;

        function showModal(e) {
            var href = $(this).attr('href');

            $modal = $('<div class="fancybox-modal"><div class="close"></div><img src="' + href + '"></div>');
            $modal.fadeIn("slow");

            $overlay = $('<div class="fancybox-overlay">');
            $overlay.css({
                'background-color': settings.overlayColor
            });

            e.preventDefault();

            $body.append($overlay);
            $body.append($modal);
            $overlay.one('click', hideModal);
            $modal.find('.close').one('click', hideModal);
        }

        function hideModal() {
            $modal.fadeOut("slow", function() {
                $modal.remove();
            });
            $overlay.fadeOut("slow", function() {
                $overlay.remove();
            });
        }

        $link.on('click', showModal);

        return this;

    }

})(jQuery);
