$(function() {

  var $caption = $('ul.tabs__caption');
  var $tabs = $('p');

  $caption.on('click', 'li:not(.active)', function() {
    $(this).addClass('active').siblings().removeClass('active');
    $(this).closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');

    });
});
