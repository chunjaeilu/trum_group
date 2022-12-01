$(function () {
  // ########################################## //
  /* site-map 전환 */
  $("header .site-map-toggle").on("click", function () {
    $("#site-map").toggleClass("show");
  });

  $("#site-map .site-map-close").on("click", function () {
    $("#site-map .gnb .depth1 > li").removeClass("max400");
    $("#site-map").removeClass("show");
  });

  /* 스크롤 반응 애니메이션 */
  $(window).on("scroll", function () {
    console.log(scrollY);

    if (scrollY >= 250) {
      $("#sub1-2 .section1 .ph-list li").eq(0).addClass("slide-up");
      $("#sub1-2 .section1 .ph-list li")
        .eq(1)
        .css("animation", "slide-up 1s 0.2s ease forwards");
      $("#sub1-2 .section1 .ph-list li")
        .eq(2)
        .css("animation", "slide-up 1s 0.4s ease forwards");
    }
    if (scrollY >= 750) {
      $("#sub1-2 .section2 h2").addClass("slide-left");
      $("#sub1-2 .section2 .ph-list2 li").eq(0).addClass("slide-right");
      $("#sub1-2 .section2 .ph-list2 li").eq(1).addClass("slide-right");
    }
    if (scrollY >= 1100) {
      $("#sub1-2 .section2 .ph-list2 li").eq(2).addClass("slide-right");
      $("#sub1-2 .section2 .ph-list2 li").eq(3).addClass("slide-right");
    }
  });
});
