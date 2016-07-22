//carousel
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
// $.extend({
//   getUrlVars: function(){
//     var vars = [], hash;
//     var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
//     for(var i = 0; i < hashes.length; i++)
//     {
//       hash = hashes[i].split('=');
//       vars.push(hash[0]);
//       vars[hash[0]] = hash[1];
//     }
//     return vars;
//   },
//   getUrlVar: function(name){
//     return $.getUrlVars()[name];
//   }
// });
//
// //Second call with this:
// // Get object of URL parameters
// var allVars = $.getUrlVars();
//
// // Getting URL var by its nam
// var keyword = $.getUrlVar('s');

search();

// if (keyword) {
//     $('.search__input').val(keyword);
//     search();
// }

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
        url: 'https://pixabay.com/api/',
        data: params,
        type: "GET"
    })
    .done(function(data) {
        console.log(data);
        var imageContainer = $('.grid');
        imageContainer.empty();
        data.hits.forEach(function(result, count) {
            if (count == 4 || count == 5) {
                imageContainer.append('<div class="grid-item grid-item2"><p class="grid-item--tag grid-item--tag2">' + result.tags +'</p><img src="' + result.webformatURL + '"></div>');
            }else {
                imageContainer.append('<div class="grid-item"><p class="grid-item--tag">' + result.tags +'</p><img src="' + result.webformatURL + '"></div>');
            }
            //console.log(count);
        });
        //imageContainer.find('.grid-item:nth-child(5)').addClass('grid-item2');
        //imageContainer.find('.grid-item:nth-child(6)').addClass('grid-item2');
        imageContainer.imagesLoaded().progress( function() {
          // init Masonry after all images have loaded
         imageContainer.masonry({
              itemSelector: '.grid-item',
              columnWidth: '.grid-item',
              gutter: 20
          });
        });
    })
    .fail(function(error) {
        console.log(error);
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
