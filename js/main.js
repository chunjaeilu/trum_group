/* main.js */
$(function () {
  /* contents_2 bg_img 전환 */
  let bgEl = [
    "images/contents_2_bg_1.jpg",
    "images/contents_2_bg_2.jpg",
    "images/contents_2_bg_3.jpg",
    "images/contents_2_bg_4.jpg",
  ];
  $(".contents_2 > .bm-list > li").hover(function () {
    let num = $(this).index();
    $(".contents_2").css({
      backgroundImage: `url(${bgEl[num]})`,
      transition: "1s",
    });
  });

  /* contents_3 next/prev 버튼 */
  $(".contents_3 .btn_box .news_prev").click(function () {
    $(".contents_3 li:last").prependTo(".contents_3 > .news_list");
  });

  $(".contents_3 .btn_box .news_next").click(function () {
    $(".contents_3 li:first").appendTo(".contents_3 > .news_list");
  });
});

/* :: tab & mob :: contents_2 슬라이드 버튼 */

$(function () {
  let tab_width = 50;
  $(".contents_2 .slide-btn.tab-only button").on("click", function () {
    num = $(this).index();
    x = num * tab_width;
    $(".contents_2 .bm-list").css("transform", `translateX(${-x}vw)`);
    $(".contents_2 .slide-btn.tab-only button").removeClass("active");
    $(this).addClass("active");
  });

  let mob_width = 100;
  $(".contents_2 .slide-btn.mob-only button").on("click", function () {
    num = $(this).index();
    x = num * mob_width;
    $(".contents_2 .bm-list").css("transform", `translateX(${-x}vw)`);
    $(".contents_2 .slide-btn.mob-only button").removeClass("active");
    $(this).addClass("active");
  });
});
