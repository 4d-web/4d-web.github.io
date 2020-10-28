// @version     2.4
// @history     2.4 HTTPS support; add Tampermonkey metadata.
// @history     2.3 Exclude chat.

(function() {
    'use strict';
    let kuroir = document.getElementsByClassName("ace-kuroir");
    console.log("===== THEME DARK 1.0 =====");
    var style = document.createElement('style');
    style.innerHTML = `
.ace-kuroir {
  background-color: #333 !important;
  color: white;
}
.ace-kuroir .ace_variable {
  color: #9573A6;
}
.ace-kuroir .ace_numeric {
  color: #6090B4;
}
.ace-kuroir .ace_marker-layer .ace_selection {
  background: rgb(167 129 45 / 57%) !important;
}
.ace-kuroir .ace_print-margin {
  width: 0 !important;
  background: #2B2B2B;
}
#codeBlock {
  height: 770px !important;
}
.ace_cursor {
  color: white;
}

`;
    document.body.appendChild(style);
    // Your code here...
})();