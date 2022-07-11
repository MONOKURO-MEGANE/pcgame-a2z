/*** jQuery ***/
var jquery = require("jquery");
window.$ = window.jQuery = jquery;
//require("jquery-ui-dist/jquery-ui.js");

jQuery(function() {
  console.log("JQUERY!!");
});


// Font Awesome 5 (Free)
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";


// ページ内スムーズスクロール
import "./script/internal_smooth_scroll.js";
// 上に戻るボタン
import "./script/return_top/return_top.js";


/*** NormalizeCSS(resetCSS) ***/
import "normalize.css";

import "./stylesheet/style.scss";
import "./stylesheet/common.scss";
import "./stylesheet/header.scss";
import "./stylesheet/footer.scss";

