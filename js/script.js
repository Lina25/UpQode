
jQuery(document).ready(function ($) {

	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});

    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });

	// main-menu-scroll

    jQuery(window).scroll(function () {
        var top = jQuery(document).scrollTop();
        var height = 300;
    

        if (top > height) {
            jQuery('.navbar-fixed-top').addClass('menu-scroll');
        } else {
            jQuery('.navbar-fixed-top').removeClass('menu-scroll');
        }
    });

	
	
    /*---------------------------------------------*
     * Scroll Total Navbar
     ---------------------------------------------*/

    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });

    /*---------------------------------------------*
     * Google Map Area
     ---------------------------------------------*/

    var map = new GMaps({
        el: '#map',
//        lat: 23.535726,
//        lng: 90.713344,
        scrollwheel: false
    });


    map.addMarker({
//        lat: 23.535726,
//        lng: 90.713344,
//        title: '',
        infoWindow: {
            content: '<p></p>'
        }

    });    

    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

    $.localScroll();

});
