// jQuery drop down menu

$(function() {
    $('.submenu').on('mouseenter', function() {
        $(this).find('.inner').eq(0).addClass('visible');
    }).on('mouseleave', function() {
        $(this).find('.inner').eq(0).removeClass('visible');
    });
});
