$(function(){
	//브라우저(뷰포트 viewport)의 높이값을 section의 높이값으로 갱신
	var ht = $(window).height();
	$('section').height(ht);

	//브라우저가 리사이즈 될 때마다 section의 높이값 갱신
	$(window).resize(function(){
		var ht = $(window).height();
		$('section').height(ht);
	});

	
	//내비게이션 메뉴 클릭시 해당 페이지로 이동
	$('.page li').on('click', function(){
		var ht = $(window).height();
		var idx = $(this).index();

		var sectionh = ht*idx;
		$('html, body').stop().animate({'scrollTop':sectionh},1500);
	});


	$(window).on('scroll',function(){
		var ht = $(window).height();
		var scroll = $(window).scrollTop();
		
		for(var i=0; i<4; i++){
			if (scroll>=ht*i && scroll<ht*(i+1)) {//첫번째 메뉴의 첫번째 페이지 영역
			$('.page li').removeClass();
			$('.page li').eq(i).addClass('on');
			} 
		}
		if ( scroll > ht*3) {
			$('nav').hide();
			$('.scroll').hide();
			} else {
			$('nav').show();
			$('.scroll').show();
			return false
		}
	});

	$('.gnbOpen').click(function(){
		$('.gnb').stop().animate({left:0},500);
		
	});
	$('.gnbClose').click(function(){
		$('.gnb').stop().animate({left:'-60%'},500);
		return false;
	});




	$('section').on('mousewheel',function(e,delta){
		if(delta > 0){//마우스 휠을 올렸을때
			//현재 section의 이전 section의 상단에서부터의 위치로
			//.offset().top 기준 객체가 브라우저 상단에서부터의 거리
			var prev = $(this).prev().offset().top;
			$('html, body').stop().animate({'scrollTop':prev},1500,"easeInOutExpo");
		}else if (delta < 0) {//마우스 휠을 내렸을때
			var next = $(this).next().offset().top;
			$('html, body').stop().animate({'scrollTop':next},1500,"easeInOutExpo");
		}
	})

});