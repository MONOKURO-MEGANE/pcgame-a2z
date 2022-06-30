/*** jQuery ***/
var jquery = require("jquery");
window.$ = window.jQuery = jquery;
//require("jquery-ui-dist/jquery-ui.js");

jQuery(function() {
  $('a[href^="#"]').on('click', function() {
    var speed = 800;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
});
