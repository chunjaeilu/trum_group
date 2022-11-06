/* main.js */
$(function () {
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
});
