$(document).ready(function() {
  $(".ham-menu").click(function () {
    $(this).toggleClass("active");
    $(this).next(".header-box-right").toggle();
  });
});