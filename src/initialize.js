import globals from "./globals.js"
import {btnStartDown, btnCreateDown} from "./events.js"



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

    //Ruta o absoluta o relativa al fichero que hace la petición (html)
    const url = "https://raw.githubusercontent.com/zsiciarz/skyrim-alchemy-toolbox/master/data/ingredients.json";
    const request = new XMLHttpRequest();

    request.onreadystatechange = function (){

        if(this.readyState == 4){

            if(this.status == 200){

                if(this.responseText != null){

                    const resultJSON = JSON.parse(this.responseText);
                    
                    globals.potionsData = resultJSON;

                    console.log(globals.potionsData);

                    displaySecondPage();

                }
                
            else
                alert("Communication error: No data received");
            }

            else
                alert("Communication error: " + this.statusText);
        }
    }

    request.open('GET', url, true);
    request.responseType = "text";
    request.send();
    
}

export {
    initHTMLelements,
    initEvents,
    getDataBaseInfo,
}