var navEvent = function(main, sub){
   $(main).mouseover(function(){
      $(sub).stop().slideDown(300);
      $(main).css('background', '#1f1f20');
   });
   $(main).mouseleave(function(){
      $(sub).stop().slideUp(300);
      $(main).css('background', '');
   });
}

navEvent('.mainList1, .mainSub1', '.mainSub1');
navEvent('.mainList2, .mainSub2', '.mainSub2');
navEvent('.mainList3, .mainSub3', '.mainSub3');
navEvent('.mainList4, .mainSub4', '.mainSub4');
navEvent('.mainList5, .mainSub5', '.mainSub5');

/* 네비 슬라이드 영역 끝 */

$(window).scroll(function(){
   var wScroll = $(this).scrollTop();

   if(wScroll >= $('#recommendation .contents').offset().top){
      $('#bland').removeClass('show');
      $('#bland').addClass('show');
   }
   /* 블렌드 영역 */

   if(wScroll >= $('#brand').offset().top){
      $('#recommendation').removeClass('show');
      $('#recommendation').addClass('show');
   }
   /* 추천상품 영역 */
});

/* transition 효과 끝 */

$('.imgSlide').slick({
   dots: true,
   autoplay: true,
   autoplaySpeed: 3000,
   arrows: true,
   responsive: [
       {
           breakpoint: 768,
           settings: {
               arrows: true,
               dots: false
           }
       }
   ]
});

/* 이미지 슬라이드 끝 */