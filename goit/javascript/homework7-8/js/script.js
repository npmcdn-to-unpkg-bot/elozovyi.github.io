// Tabs
$(function() {

  var $caption = $('ul.tabs__caption');
  var $content = $('div.tabs__content p');

  $caption.on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content')
      .removeClass('active').eq($(this).index()).addClass('active');
    // $content.slideDown().animate({
    //     width: "500"
    // }, 2000);
});
});

// Tooltip
$(function() {

  var $tooltip = $('fieldset div');
  var $helpButton = $('button');

  $tooltip.mouseover(function(){
    $(this).children('span').show('slow');

  }).mouseout(function(){
    $(this).children('span').hide('slow');
  });

  $helpButton.on('click', function(e) {
    $tooltip.find('span').each(function(){
      $(this).show(700,'swing');

      var $el = $(this);
      setTimeout(function(){
        $el.hide(1000, 'swing');
    }, 2000);
    });

    e.preventDefault();
  });
});
