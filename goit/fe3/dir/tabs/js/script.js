// Tabs
$(function() {

  var $caption = $('ul.tabs__caption');
  var $content = $('div.tabs__content p');

  $caption.on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content')
      .removeClass('active').eq($(this).index()).addClass('active')
      .parent().find('div.tabs__content p').effect( "slide", "slow" );
  });
});

// Tooltip
$(function() {

  var $tooltip = $('fieldset input');
  var $helpButton = $('button');

  $tooltip.mouseover(function(){
    $(this).parent().children('span').show(50);

  }).mouseout(function(){
    $(this).parent().children('span').hide(50);
  });

  $helpButton.on('click', function(e) {
    $('.tooltip').find('span').each(function(){
      $(this).show(700,'swing');

      var $el = $(this);
      setTimeout(function(){
        $el.hide(1000, 'swing');
    }, 2000);
    });

    e.preventDefault();
  });
});
