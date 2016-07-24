// Carousel
(function($) {
    $(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });
    });
})(jQuery);

//AJAX vs Masonry

search();

function search() {
    var params = {
        // Request parameters
        key: '2950071-0562fdd7db9a4f9ebb6702658',
        order: 'latest',
        min_width: 300,
        min_height: 310,
        per_page: 7,
        image_type: 'photo',
        pretty: true,
        q: ''
    },
    keyword = $('.search__input').val();
    if (keyword) {
        params.q = keyword;
    }
    $.ajax({
        url: '//pixabay.com/api/',
        data: params,
        type: "GET",
        dataType: 'json'
    })
    .done(function(data) {
        var imageContainer = $('.grid'),
            columnWidth = parseInt($('#columnWidth').val());
        imageContainer.empty();
        if (typeof columnWidth === 'undefined') {
            columnWidth = '.grid-item';
        }
        data.hits.forEach(function(result, count) {
            if (count == 4 || count == 5) {
                imageContainer.append('<div class="grid-item grid-item2"><p class="grid-item--tag grid-item--tag2">' + result.tags +'</p><img src="' + result.webformatURL + '"></div>');
            }else {
                imageContainer.append('<div class="grid-item"><p class="grid-item--tag">' + result.tags +'</p><img src="' + result.webformatURL + '"></div>');
            }
        });
         imageContainer.imagesLoaded().progress( function() {
          // init Masonry after all images have loaded
            imageContainer.masonry({
                  itemSelector: '.grid-item',
                  columnWidth: columnWidth,
                  gutter: 20
              });
         });
    })
    .fail(function(error) {
        console.log('fail');
    });
}

$(function() {
    $('.search__btn').click(function(){
        $('.grid').masonry('destroy');
        search();
    });
    $('.search__input').keyup(function(e) {
        var code = e.which;
        if (code == 13) {
            e.preventDefault();
            $('.grid').masonry('destroy');
            search();
            return false;
        }
    });

});
