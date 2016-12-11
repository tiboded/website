$(function() {
	$('span#home').click(function() {
		$('section').hide();
		$('nav > *').removeClass('on');
		$(this).addClass('on');
		$('section#home').fadeTo(700,0.9);
	});
	$('span#translate').click(function() {
		$('section').hide();
		$('nav > *').removeClass('on');
		$(this).addClass('on');
		$('section#translate').fadeTo(700,0.9);
	});
	$('span#teach').click(function() {
		$('section').hide();
		$('nav > *').removeClass('on');
		$(this).addClass('on');
		$('section#teach').fadeTo(700,0.9);
	});
	$('span#contact').click(function() {
		$('section').hide();
		$('nav > *').removeClass('on');
		$(this).addClass('on');
		$('section#contact').fadeTo(700,0.9);
	});
});
