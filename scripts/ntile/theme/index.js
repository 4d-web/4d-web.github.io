// ==UserScript==
// @name         ntile-theme
// @namespace    http://tampermonkey.net/
// @version      1.32
// @description  try to take over the world!
// @author       You
// @match        https://squares.in.ua/administration/siteTemplates
// @grant        none
// ==/UserScript==

let log = (text) => console.log(text)

let info = {
    "version": 1.32
},
styleData = `
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
    .ace-kuroir .ace_marker-layer .ace_bracket {
        border: 1px solid rgba(255, 255, 255, .5);
     }
    .ace-kuroir .ace_cursor {
         color: white;
    }
`

log("===== THEME DARK v."+ info.version +" =====")
let style = document.createElement('style')
style.innerHTML = styleData
document.body.appendChild(style)


// var cssId = 'myCss';  // you could encode the css path itself to generate id..
// if (!document.getElementById(cssId))
// {
//     var head  = document.getElementsByTagName('head')[0];
//     var link  = document.createElement('link');
//     link.id   = cssId;
//     link.rel  = 'stylesheet';
//     link.type = 'text/css';
//     link.href = 'http://website.com/css/stylesheet.css';
//     link.media = 'all';
//     head.appendChild(link);
// }