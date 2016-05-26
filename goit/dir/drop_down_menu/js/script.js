$(function () {

  var $menu = $('.wrapper a');
  var $links = $('.menu a');
  var $wrap = $('.wrap');


  $menu.on('click', function(e) {
    var $menu = $(this).siblings('.menu');
    e.preventDefault();
    $menu.slideToggle();

  });

  $wrap.on('click', function() {
      var myEl = $(this);

      if (myEl.hasClass('blue')) {
          myEl.removeClass('blue').addClass('light-blue');
      }
      else {
          myEl.removeClass('light-blue').addClass('blue');
      }
  });


  // $links.on('click', function(e) {
  //     var $submenu = $(this).siblings('.submenu');
  //     e.preventDefault();
  //     $submenu.slideToggle();
  // });
});
