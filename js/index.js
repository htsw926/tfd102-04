// DOM 載入完成之後
$(function () {

  // 點擊
  $("button.btn_drawer").on("click", function () {
    // -open 的樣式切換
    $(this).closest("div.right_sidebar").toggleClass("-open");
  });

  // hamburger icon 的切換
  $("button.hamburger").on("click", function () {
    $(this).toggleClass("is-active");
  });

});

// 點擊按鈕，頁面滑到最上方
$("#go_top").on("click", function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 750);
});

function click_popup() {
  if ($('#popup_a').hasClass('popup_open')) {
    $('.overlay').css('opacity', 1);
    $('.overlay').css('visibility', 'visible');
  } else {
    $('.overlay').css('opacity', 0);
    $('.overlay').css('visibility', 'hidden');
  }

  $('#popup_a').toggleClass("popup_open");
}




const hamburger = document.querySelector('#hamburger');


/*
if (window.innerWidth <= 575) {
  hamburger.dataset.aosOffset = 0;
  // $('#hamburger').data('aos-offset', 0);
  // } else if (575 < window.innerWidth <= 767) {
  //   hamburger.dataset.aosOffset = 0;
  // } else if (767 < window.innerWidth <= 991) {
  //   hamburger.dataset.aosOffset = 1000;
  //   ('aos-offset', 1200);
} else {
  hamburger.dataset.aosOffset = 1000;
  // $('#hamburger').data
}*/