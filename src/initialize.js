import globals from "./globals.js"
import {btnCreateDown,} from "./logic.js"
import {getDataBaseInfo} from ".initialize.js"


function initHTMLelements(){

    globals.btnStart        = document.getElementById('btnStart');
    globals.btnCreate       = document.getElementById('btnCreate');

    globals.btnCreate.addEventListener("mousedown",       btnStartDown,       false);
    globals.btnCreate.addEventListener("mousedown",       btnCreateDown,      false);


}

function initEvents(){

    globals.canvas.addEventListener("mouseup",   canvasMouseupHandler, false);
    globals.canvas.addEventListener("mousedown", canvasMousedownHandler, false);
    globals.canvas.addEventListener("mousemove", canvasMousemoveHandler, false);
}

function getDataBaseInfo(){

}

export {
    initHTMLelements,
    initEvents,
    getDataBaseInfo,
}