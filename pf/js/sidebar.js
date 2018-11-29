$(function(){
	var ht = $(window).height();
	$('section').height(ht);

	$(window).resize(function(){
		var ht = $(window).height();
		$('section').height(ht);
	});


	$(window).on('scroll',function(){
		var ht = $(window).height();
		var scroll = $(window).scrollTop();

		if ( scroll > 10) {
			$('aside').fadeOut();
			
			} else {
			$('aside').fadeIn();

			return false
		};
	});
});