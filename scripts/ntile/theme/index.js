// ==UserScript==
// @name         ntile-theme
// @namespace    http://tampermonkey.net/
// @version      1.43
// @description  try to take over the world!
// @author       You
// @match        https://squares.in.ua/administration/siteTemplates
// @grant        none
// ==/UserScript==
let log = (text) => console.log(text)

let info = {
        "version": 1.43,
        "info": "beta"
    },
    styleData = `
        .ace-kuroir {
            background-color: #333 !important;
            color: white;
        }
        .ace-kuroir .ace_variable {
            color: #9573A6;
        }
        .ace-kuroir .ace_constant.ace_numeric {
            color: #d26915;
        }
        .ace-kuroir .ace_marker-layer .ace_selection {
            background: rgb(167 129 45 / 57%) !important;
        }
        .ace-kuroir .ace_print-margin {
            width: 0 !important;
            background: #2B2B2B;
        }
        #codeBlock {
            height: 680px !important;
        }
        .ace-kuroir .ace_marker-layer .ace_bracket {
            border: 1px solid rgba(255, 255, 255, .5);
         }
        .ace-kuroir .ace_cursor {
             color: white;
        }
    `

log("[THEME DARK v."+ info.version +"]")
let style = document.createElement('style')
style.innerHTML = styleData
document.body.appendChild(style)

function ready () {
    // Настройки
    let keys = [ /// Можно указать больше языков
        [0, ['-', '_']],
        [1, ['s', 'S']],
        [2, ['r', 'R']],
    ]
    let firstElement 	= 'folder', /// Первый элемент folder или file
        сombSet			= true,	/// Комбинации активны true/false
        сombinationKey 	= 'Alt'; 	/// Пока доступна только клавиша для комбинаций 'Alt'

    // Cообщения
    let textMessages = {
        keyPress: 'Нажата кнопка: ',
        keyError: 'Ошибка '
    }

    /// Ошибки
    let errors = {
        items: [
            {
                text: ': простите, но такая клавиша или комбинация не задана',
                code: '404'
            },
            {
                text: ': простите, но папка пуста или нужно больше одного элемента',
                code: '000'
            }
        ]
    }

    // Функции ошибок
    let isEmpty = (obj) => {
        if (obj.length > 1) return true;
        else return false;
    }

    /// Показать ошибки
    let errorShow = (errorCode) => {
        for (let i in errors.items) {
            if (errors.items[i]['code'] === errorCode) {
                console.log(textMessages.keyError+errorCode+errors.items[i]['text']);
            }
        }
        return true;
    }

    // Есть папки?
    // Есть такая кнопка?
    let keysСheck = (key) => {
        if (keys[0][1].some(elem => elem === key)) {
            return findButton("FoldAll"), showKey(event.key)
        } else if (keys[1][1].some(elem => elem === key)) {
            return showKey(event.key);
        } else if (keys[2][1].some(elem => elem === key)) {
            return showKey(event.key);
        } else {
            return errorShow('404', key);
        }
    }

    // Кнопка нажата?
    document.addEventListener('keydown', (event) => {
        let сombKey;

        if (сombinationKey === 'Alt') {
            сombKey = event.altKey;
        } else {
            сombKey = false;
        }

        if (сombSet === true & сombKey === true) {
            if (event.key === сombinationKey) {
                return; // Не реагировать на клавишу комбинаций
            } else {
                return keysСheck(event.key);
            }
        } else if (сombSet === false) {
            return keysСheck(event.key);
        } else {
            return errorShow('404', event.key);
        }
    }, false);


    let findButton = (text) => {
        let buttons = document.querySelectorAll('button');
        for (let i=0, l=buttons.length; i<l; i++) {
            if (buttons[i].firstChild.nodeValue == text)
                return hideCode(buttons[i])
        }
    }

    let hideCode = (button) => {
        button.click()
    }

    // Показать объект
    let showKey = (key) => {
        showSplitter(textMessages.keyPress + key);
        return true;
    }
}
/* Конец кода сортировки */

document.addEventListener("DOMContentLoaded", ready);


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