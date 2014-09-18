$(window).scroll(function() {
	if( $(".navbar").offset().top > 50 ) {
		$(".navbar-fixed-top").addClass("top-nav-collapse");
	} else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
	}
});

$(function() {
	$(".page-scroll a").bind("click", function(event) {
		var $anchor = $(this);
		$("html, body").stop().animate({
			scrollTop: $($anchor.attr("href")).offset().top
		}, 1500, "easeInOutExpo");
		event.preventDefault();
	});
		
	$(".progress-bar").bind("inview", function (event, visible) {
		if (visible) {
			$(this).css({
				"width": $(this).data("percentage"),
				"background-image": "none",
				"background-color": "#e29839",
				"height": "10px"
			});
		} else {
			$(this).css("width", "0%");
		}
	});
	
	$(".cv-header").click(function() {
		var $cvBody = $(this).parent(".cv-panel").children(".cv-body");
		$cvBody.toggle({
			"easing": "easeInOutExpo",
			"duration": 500
		});
		
		var $icon = $(this).children("span.cv-icon-open");
		
		var clockwise = $icon.attr("data-rotation");

		$icon.css({
			"transform": "rotate(" + (clockwise * 180) + "deg)"
		});
		$icon.attr("data-rotation", clockwise == 1 ? 0 : 1);
		
		/**
			TODO: ha alul kilóg, akkor varázsolni kell.
		*/
		event.preventDefault();
	});
	
});