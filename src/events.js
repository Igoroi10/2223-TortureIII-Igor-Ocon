import globals from "./globals.js";
import {createPotion, select4Ingredients} from "./logic.js"
import {getDataBaseInfo} from "./initialize.js"
import {States} from "./constans.js"

function btnStartDown(){
    getDataBaseInfo();
    globals.state = States.CREATION_MENU;
}

function btnCreateDown(){
    createPotion()
    displayResultsDiv();
    globals.state = States.RESULT;
}

function displaySecondPage(){
    print4Ingredients();
    document.getElementById('potionIngredients').style.display  = "block";
    document.getElementById('startDiv').style.display           = "none";
}

function displayResultsDiv(){

    document.getElementById('btnCreate').style.display                   = "none";
    document.getElementById('potionResult').style.display                = "block";
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

function print4Ingredients(){

}

export{
    btnCreateDown,
    btnStartDown,
    displaySecondPage,
    mouseDownHandler,
}