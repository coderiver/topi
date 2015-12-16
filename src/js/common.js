$(document).ready(function() {

	$('.js-menu-btn').click(function() {
		$('.js-menu').toggleClass('is-active');
		$('body').toggleClass('is-active');
		return false;
	});
	$('.js-menu').each(function() {
		$('body').click(function() {
			$('.js-menu').removeClass('is-active');
			$('body').removeClass('is-active');
		});
		$(this).click(function(event) {
			event.stopPropagation();
		});
	});

});