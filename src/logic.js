import globals from "./globals.js";

function createPotion(){
    console.log
    let firstSelected  = -1;
    let secondSelected = -1;
    let commonEffectResult = -1;
    let min = 0;
    let max = 3;

    for(let i = 0; i < globals.chosenIngredients.length; i++){
        let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
        if(firstSelected === -1){
            firstSelected = randomNum
        }
    
        else if(secondSelected === -1 && randomNum !== firstSelected){
            secondSelected = randomNum;
            i = globals.chosenIngredients.length;
        }
    }

    for(let i = 0; i < 4; i++){
        for(let l = 0; l < 4; l++){
            if(globals.chosenIngredients[firstSelected].effects[i] === globals.chosenIngredients[secondSelected].effects[l]){
                commonEffectResult = i;
            }
        }
    }
    // console.log(globals.chosenIngredients[firstSelected]);
    // console.log(globals.chosenIngredients[secondSelected]);
    // if(commonEffectResult !== -1)
    // console.log("Resultado de la combinación de efectos: " + globals.chosenIngredients[firstSelected].effects[commonEffectResult]);

}

function select4Ingredients(){

    let min = 0;
    let max = globals.potionsData.ingredients.length - 1;
    let firstSelected  = -1;
    let secondSelected = -1;
    let thirdSelected  = -1;
    let fourthSelected = -1;
    console.log(globals.potionsData.ingredients.length)

    for(let i = 0; i < globals.potionsData.ingredients.length; i++){

        let randomNum = Math.floor(Math.random() * (max - min + 1) + min);

        if(firstSelected === -1){
            firstSelected = randomNum
        }

        else if(secondSelected === -1 && randomNum !== firstSelected){
            secondSelected = randomNum;
        }

        else if(thirdSelected === -1 && randomNum !== firstSelected && randomNum !== secondSelected){
            thirdSelected = randomNum;
        }

        else if(fourthSelected === -1 && randomNum !== firstSelected && randomNum !== secondSelected && randomNum !== thirdSelected){
            fourthSelected = randomNum;
        }

        else if(fourthSelected !== -1){
            globals.chosenIngredients.push(globals.potionsData.ingredients[firstSelected]);
            globals.chosenIngredients.push(globals.potionsData.ingredients[secondSelected]);
            globals.chosenIngredients.push(globals.potionsData.ingredients[thirdSelected]);
            globals.chosenIngredients.push(globals.potionsData.ingredients[fourthSelected]);

            i = globals.potionsData.ingredients.length;
        }
    }
    
    console.log(globals.chosenIngredients);

}
export {
    createPotion,
    select4Ingredients,
}