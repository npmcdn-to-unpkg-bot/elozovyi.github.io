$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});

//Second call with this:
// Get object of URL parameters
var allVars = $.getUrlVars();

// Getting URL var by its nam
var keyword = $.getUrlVar('s');

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
        min_height: 300,
        pretty: true,
        image_type: 'photo',
        per_page: 7
    },
    keyword = $('.search__input').val();
    if (keyword) {
        params.query = keyword;
    }
    console.log(params);
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
            imageContainer.append('<div class="grid-item"><img src="' + result.webformatURL + '"></div>');
        });
        imageContainer.find('.grid-item:nth-child(5)').addClass('grid-item2');
        imageContainer.find('.grid-item:nth-child(6)').addClass('grid-item2');
        var $grid = $('.grid').imagesLoaded( function() {
          // init Masonry after all images have loaded
          $grid.masonry({
              itemSelector: '.grid-item'
            //   ,
            //   columnWidth: 200
          });
        });
    })
    .fail(function() {
        alert("error");
    });
}

$(function() {
    $('.search__btn').click(search);
    // $('.search__input').keyup(function(e) {
    //     var code = e.which;
    //     if (code == 13) {
    //         e.preventDefault();
    //         search();
    //     }
    // });

});
