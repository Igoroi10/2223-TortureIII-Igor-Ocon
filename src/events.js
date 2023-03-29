import globals from "./globals";
import {createPotion,} from "./logic.js"
import {getDataBaseInfo} from ".initialize.js"

function btnStartDown(){
    globals.potionsData = getDataBaseInfo();
}

function btnCreateDown(){
    createPotion()
}