import globals from "./globals.js";
import {createPotion,} from "./logic.js"
import {getDataBaseInfo} from "./initialize.js"

function btnStartDown(){
    getDataBaseInfo();
}

function btnCreateDown(){
    createPotion()
}

function displaySecondPage(){

    document.getElementById('potionIngredients').style.display  = "block";
    document.getElementById('startDiv').style.display           = "none";
}


export{
    btnCreateDown,
    btnStartDown,
    displaySecondPage,
}