import "./return_top.scss";

/*** jQuery ***/
var jquery = require("jquery");
window.$ = window.jQuery = jquery;
//require("jquery-ui-dist/jquery-ui.js");

jQuery(function() {
  var pagetop = $('.pagetop');

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.on("click", function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});
