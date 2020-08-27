$(function () {

  //메인화면
  if ($('.main_slide_wrapper').length) {
    var swiper = new Swiper('.main_slide_container', {
      slidesPerView: 1,
      spaceBetween: 25,
      width: 270,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
  //홈 카테고리 슬라이드
  if ($('.categories_slide').length) {
    var menuSwiper = new Swiper('.category_menus', {
      slidesPerView: 2.5,
      spaceBetween: 27,
    });
  }
  //히스토리 뒤로가기
  $('.go_back').click(function (e) {
    e.preventDefault();

    if (window.history.length > 1) {
      widndow.history.back();
    } else {
      location.href = "./index.html"
    }
  });

  //Aside Menu
  if ($('.aside_menu_toggle').length) {
    var asideToggleBtn = $('.aside_menu_toggle');
    asideToggleBtn.click(function () {
      $('body').toggleClass('aside_active');
    });

    //Aside Menu Accordion
    var asideMenuList = $('.categories > li');
    asideMenuList.click(function (e) {
      e.preventDefault();
      $(this).find('ul').slideToggle();
      $(this).siblings('li').find('ul').slideUp(); //siblings : 이거말고 다른 형제들을 말함
    });

  }
  //상세페이지 썸네일 슬라이드
  if ($('.product_thumb_slides').length) {
    var menuSwiper = new Swiper('.product_thumb_container', {
      slidesPerView: 2.5,
      spaceBetween: 13
    });
    //이미지 변경하기
    var thumbImg = $('.product_thumb_slides li img');
    var targetImg = $('.product_img_top img');

      thumbImg.click(function(e){
        e.preventDefault();
        var targetImgUrl = $(this).attr('src');
        targetImg.attr('src',targetImgUrl);
    });

  }
  //상세페이지 별표
  if($('.review_content').length){
    var rating = $('.review_content li .rating');
    /*rating 마다 할일
      각각이 가지고 있는 별점을 변수명 starscore 3에 저장한다
      svg nth:child 몇번째 1 ~3번째 color 값을 F05522로 바꾼다
    */
   rating.each(function(){
    var starScore = $(this).attr('data-rate');
    $(this).find('svg:nth-child(-n+' + starScore +')').css({color:'#F05522'});
   });
  }
  //장바구니 합계구하기
  if($('.cart_list').length){
    var cartList = $('.cart_list li');
    var targetTotal = $('.total_price .price');
    var shippingCost = $('.shipping .price');
    var totalPrice = 0;

    //페이지 열리자 마자 합계를 계산
    //수량을 바꾸면 합계를 다시 계산
    //delete 했을때 다시 계산

    //합계 구하기 함수
    function calcTotal(){
      cartList.each(function(){

      });
    }
  
  }

  //검색



}); //document.ready