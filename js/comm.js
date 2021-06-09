
// DOM 載入完成之後
$(function () {
  // 點擊
  $("button.btn_drawer").on("click", function () {
    // -open 的樣式切換
    $(this).closest("div.right_sidebar").toggleClass("-open");
    console.log("123123123");
  });

  // hamburger icon 的切換
  $("button.hamburger").on("click", function () {
    $(this).toggleClass("is-active");
  });






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