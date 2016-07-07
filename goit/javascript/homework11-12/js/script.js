$(function(){

    //JavaScript Micro-Templating
    var html = $('#profile').html();
    var data = {
        title: 'Jack Jones',
        profile_image_url: 'img/profile.png',
        number: '+380123456789',
        mail: 'johnes93@gmail.com',
        linkedin: 'https://www.linkedin.com'
    };
    var content = tmpl(html, data);

    $('body').append(content);

    //carousel
    $('a.fancybox').fancybox({
        overlayColor: 'rgba(0, 0, 0, 0.5)'

    });

});
