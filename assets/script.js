$(function(){    
    $('.p-project__lists').slick({
        autoplay:true,//自動再生する
        autoplaySpeed:4000,//自動再生するスピード 4秒
        dots:false,//ドット部分を表示する
        slidesToShow:3,
        arrows:false,
        variableWidth:true,
    });
  
  $('.article-related__lists').slick({
        autoplay:true,//自動再生する
        autoplaySpeed:4000,//自動再生するスピード 4秒
        dots:false,//ドット部分を表示する
        slidesToShow:1,
        arrows:false,
        variableWidth:true,
    	centerMode: true,// 前後スライドを部分表示
	    centerPadding: '20%',// 両端の見切れるスライド幅
    });
//     $('.article-related__lists-project').slick({
//         autoplay:true,//自動再生する
//         autoplaySpeed:4000,//自動再生するスピード 4秒
//         dots:false,//ドット部分を表示する
//         slidesToShow:4,
//         arrows:false,
//         variableWidth:true,
//     	centerMode: true,// 前後スライドを部分表示
// 	    centerPadding: '20%',// 両端の見切れるスライド幅
//     });
});
