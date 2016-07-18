$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});

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
//
// if (keyword) {
//     $('.search_input').val(keyword);
//     search();
// }
//
// function search() {
//     var params = {
//         // Request parameters
//         "tag": $('.search_input').val(),
//         "limit": "10",
//         "key": "LIVDSRZULELA"
//     };
//
//     $.ajax({
//         url: "https://api.riffsy.com/v1/search?" + $.param(params),
//         type: "GET"
//     })
//     .done(function(data) {
//         console.log(data);
//         var results = data.results,
//             imageContainer = $('.wrapper-image');
//         imageContainer.empty();
//         results.forEach(function(result) {
//             imageContainer.append('<img src="' + result.url + '">');
//         })
//     })
//     .fail(function() {
//         alert("error");
//     });
// }
//
// $(function() {
//     $('.search_btn').click(search);
//     $('.search_input').keyup(function(e) {
//         var code = e.which;
//         if (code == 13) {
//             e.preventDefault();
//             search();
//         }
//     });
//
// });
