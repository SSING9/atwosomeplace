var navEvent = function(main, sub, font){
   $(main).mouseover(function(){
      $(sub).stop().slideDown(300);
      $(main).css('background', '#1f1f20');
      $(font).css('color','#dd0330');
   });
   $(main).mouseleave(function(){
      $(sub).stop().slideUp(300);
      $(main).css('background', '');
      $(font).css('color','#fff');
   });
}

navEvent('.mainList1, .mainSub1', '.mainSub1', '.mainList1 a');
navEvent('.mainList2, .mainSub2', '.mainSub2', '.mainList2 a');
navEvent('.mainList3, .mainSub3', '.mainSub3', '.mainList3 a');
navEvent('.mainList4, .mainSub4', '.mainSub4', '.mainList4 a');
navEvent('.mainList5, .mainSub5', '.mainSub5', '.mainList5 a');

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

$('#event').click(function(e){
   e.preventDefault();
   $(this).hide();
});

/* 이벤트창 닫기 */