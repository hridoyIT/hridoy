$(function(){
  "use strict";
    var htmlBody = $('html, body');
    var windo = $(window);

      //fixed menu
      var bc2top = $(".top-btn");
      var $sticky = $(".menu");
    
    $(".search").on('click' , function(){
        $(".search-box").toggle();
       $("input[type='search']").focus();
    });

 


 //animation scroll js

 $('.menu ul li a').on('click', function () {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
          htmlBody.animate({
              scrollTop: target.offset().top - 150
          }, 1000);
          return false;
      }
  }
});


$(window).on('scroll' , function(){
  var $scrolling = $(this).scrollTop();
 
  if($scrolling > 130){
    $sticky.addClass("nav-bg");
  }
  else{
    $sticky.removeClass("nav-bg");
  }

  if ($scrolling > 130) {
    bc2top.fadeIn(1000);
} else {
    bc2top.fadeOut(1000);
}
});

	// this is for back to top
	bc2top.on('click', function () {
		htmlBody.animate({
			scrollTop: 0
		}, 500);
	});


    //venobox js
    $('.venobox').venobox({
        titleattr: 'data-title',    // default: 'title'
        numeratio: true,            // default: false
        infinigall: true            // default: false
    });
    
    
    //slick js
    
$('.testimonial-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
    nextArrow:'<i class="fa fa-long-arrow-right round-next round-arrow" aria-hidden="true"></i>',
    prevArrow:'<i class="fa fa-long-arrow-left round-prev round-arrow" aria-hidden="true"></i>',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
    
    
     //news slider js
    $('.news-slide').slick({
  dots: false,
  infinite: false,
  speed: 300,
    nextArrow:'<i class="fa fa-long-arrow-right round-next round-arrow" aria-hidden="true"></i>',
    prevArrow:'<i class="fa fa-long-arrow-left round-prev round-arrow" aria-hidden="true"></i>',
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
    
    
});