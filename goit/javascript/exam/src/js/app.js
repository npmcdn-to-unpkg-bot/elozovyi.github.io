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

if (keyword) {
    $('.search_input').val(keyword);
    search();
}

function search() {
    var params = {
        // Request parameters
        "tag": $('.search_input').val()
    };

    $.ajax({
        url: "http://api.pixplorer.co.uk/image?word=" + $.param(params) + "&amount=5&size=tb",
        type: "GET"
    })
    .done(function(data) {
        console.log(data);
        var results = data.images,
            imageContainer = $('.grid');
        imageContainer.empty();
        results.forEach(function(result) {
            imageContainer.append('<div class="grid-item"><img src="' + result.imageurl + '"></div>');
        });
        var $grid = $('.grid').imagesLoaded( function() {
          // init Masonry after all images have loaded
          $grid.masonry({
              itemSelector: '.grid-item',
              columnWidth: 200
          });
        });
    })
    .fail(function() {
        alert("error");
    });
}

$(function() {
    $('.search_btn').click(search);
    $('.search_input').keyup(function(e) {
        var code = e.which;
        if (code == 13) {
            e.preventDefault();
            search();
        }
    });

});
