jQuery(document).ready(function ($) {
	//wow js init
	new WOW().init();
	
	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});
	
	// main-menu-scroll
	jQuery(window).scroll(function () {
		var top = jQuery(document).scrollTop();
		var height = 300;
		if (top > height) {
			jQuery('.navbar-fixed-top').addClass('menu-scroll');
		}
		else {
			jQuery('.navbar-fixed-top').removeClass('menu-scroll');
		}
	});
	//      scroll navbar
	$('body').scrollspy({
		target: '.navbar'
		, offset: 160
	});
	
	
	//google map 

var map = new GMaps({
	el: '#map',
	lat: 49.831103,
	lng: 23.969860,
	scrollwheel: false
});

map.addMarker({
	lat: 49.831103,
	lng: 23.969860
});
	
	
	//scrolltop animation
$(window).scroll(function () {
	if ($(this).scrollTop() > 700) {
		$('.scrollup').fadeIn('slow');
	}
	else {
		$('.scrollup').css('display', 'none')
	}
});
$('.scrollup').click(function () {
	$("html, body").animate({
		scrollTop: 0
	}, 1000);
	return false;
});

	//progress bar
	$(function() {
    
    var $meters = $(".progress > .progress-bar");
    var $section = $('#about');
    var $queue = $({});
    
    function loadDaBars() {
        $meters.each(function() {
            var $el = $(this);
            var origWidth = $el.width();
            $el.width(0);
            $queue.queue(function(next) {
                $el.animate({width: origWidth}, 1000, next);
            });
        });
    }
    
    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            $(document).unbind('scroll');
        }
    });
    
});
	
	
});

