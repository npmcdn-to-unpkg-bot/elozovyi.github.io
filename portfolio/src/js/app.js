jQuery(document).ready(function($){
	//document location
	// var docLocation = document.location.origin;
	// $("#og-img").attr({
    //     "content" : docLocation + "/portfolio/build/img/frontend.jpg",
    // });


	//menu
	//open/close mega-navigation
	$('.cd-dropdown-trigger').on('click', function(event){
		event.preventDefault();
		toggleNav();
	});

	//close meganavigation
	$('.cd-dropdown .cd-close').on('click', function(event){
		event.preventDefault();
		toggleNav();
	});
	$('.has-children').on('click', function(event){
		event.preventDefault();
		toggleNav();
	});

	//on desktop - differentiate between a user trying to hover over a dropdown item vs trying to navigate into a submenu's contents
	var submenuDirection = ( !$('.cd-dropdown-wrapper').hasClass('open-to-left') ) ? 'right' : 'left';
	$('.cd-dropdown-content').menuAim({
        activate: function(row) {
        	$(row).children().addClass('is-active').removeClass('fade-out');
        	if( $('.cd-dropdown-content .fade-in').length == 0 ) $(row).children('ul').addClass('fade-in');
        },
        deactivate: function(row) {
        	$(row).children().removeClass('is-active');
        	if( $('li.has-children:hover').length == 0 || $('li.has-children:hover').is($(row)) ) {
        		$('.cd-dropdown-content').find('.fade-in').removeClass('fade-in');
        		$(row).children('ul').addClass('fade-out')
        	}
        },
        exitMenu: function() {
        	$('.cd-dropdown-content').find('.is-active').removeClass('is-active');
        	return true;
        },
        submenuDirection: submenuDirection,
    });

	function toggleNav(){
		var navIsVisible = ( !$('.cd-dropdown').hasClass('dropdown-is-active') ) ? true : false;
		$('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);
		$('.cd-dropdown-trigger').toggleClass('dropdown-is-active', navIsVisible);
		if( !navIsVisible ) {
			$('.cd-dropdown').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('.has-children ul').addClass('is-hidden');
				$('.move-out').removeClass('move-out');
				$('.is-active').removeClass('is-active');
			});
		}
	}

	//slow scroll
	$('.slow-button').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 1000);
		event.preventDefault();
		toggleNav();
		return false;
	});
	//show modal
	$('.calltoaction').on('click', function(event) {
		event.preventDefault();

		$('.overlay').fadeIn(400,
			function() {
				$('.modal')
				.css('display', 'block')
				.animate({opacity: 1, top: '25%'}, 200);
				$('.modal-close').css('display', 'block');

				$('.calltoaction-left')
				.animate({opacity: 0}, 600);
			});

			$('.modal-close, .overlay').click( function() {
				$('.modal')
				.animate( {
					opacity: 0, top: '30%'}, 200,
					function() {
						$(this).css('display', 'none');
						$('.overlay').fadeOut(400);

						$('.calltoaction-left')
						.animate({opacity: 1}, 600);
					});
				});
			})

});
