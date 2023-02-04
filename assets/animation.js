$(function(){
    $(window).scroll(function (){
        $('.sway-after,.sway-s-after,.fallin-after,.fade-after,.fadeY-after,.barrage-p,.fade-after-p').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight+250){
                $(this).addClass('effect-scroll');
            }
        });

	});

});
