import globals from "./globals.js";
import {createPotion,} from "./logic.js"
import {getDataBaseInfo} from "./initialize.js"
import {States} from "./constans.js"

function btnStartDown(){
    getDataBaseInfo();
    globals.state = States.CREATION_MENU;
}

function btnCreateDown(){
    createPotion()
    globals.state = States.RESULT;
}

function displaySecondPage(){

    document.getElementById('potionIngredients').style.display  = "block";
    document.getElementById('startDiv').style.display           = "none";
}

function mouseDownHandler(){

    switch(globals.state){

        case States.START:
            btnStartDown();
            break;
        case States.CREATION_MENU:
            btnCreateDown();
            break;
        case States.RESULT:
            break;

        default:
            btnStartDown();     
    }

}

export{
    btnCreateDown,
    btnStartDown,
    displaySecondPage,
    mouseDownHandler,
}