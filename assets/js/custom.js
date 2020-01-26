$(document).ready(function(){
	$(window).scroll(function() {
		if ($(this).scrollTop() > 42 ) {
			$('.fixed-top').addClass('scrolling');
			$('.fixed-top').removeClass('unscrolling');
		} else {
			$('.fixed-top').removeClass('scrolling');
			$('.fixed-top').addClass('unscrolling');
		}
	});
});