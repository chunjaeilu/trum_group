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
});
