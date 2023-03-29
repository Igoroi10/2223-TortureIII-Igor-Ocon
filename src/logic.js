import globals from "./globals.js";

function createPotion(){
    console.log
    let firstSelected  = -1;
    let secondSelected = -1;
    let commonEffectResult = -1;
    let min = 0;
    let max = 3;
    let creationPhrase;
    let ingredientsPhrase;
    let potionNamePhrase;
    let weightPhrase;

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

    if(commonEffectResult === -1){
        creationPhrase      = "POTION FAILED"
        ingredientsPhrase   = globals.chosenIngredients[firstSelected].name + " + " + globals.chosenIngredients[secondSelected].name;
        potionNamePhrase    = "failed potion";
        weightPhrase        = "1.2";
    }

    else{
        creationPhrase      = "POTION CREATED"
        ingredientsPhrase   = globals.chosenIngredients[firstSelected].name + " + " + globals.chosenIngredients[secondSelected].name;
        potionNamePhrase    = "Potion of " + globals.chosenIngredients[firstSelected].effects[commonEffectResult];
        weightPhrase        = globals.chosenIngredients[firstSelected].weight + globals.chosenIngredients[secondSelected].weight + 1.2;
    }


    const div = document.getElementById('potionResult');

    const HTMLstring =  "<p>" + creationPhrase + "</p> <br>"+
                       +"<p>" + ingredientsPhrase + "</p> <br>"+
                       +"<p>" + potionNamePhrase + "</p> <br>"+
                       +"<p>" + weightPhrase + "</p> <br>";

    div.innerHTML = HTMLstring;


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

function print4Ingredients(){
    let div = [];
    let firstDiv = document.getElementById('firstIngredient');
    let secondDiv = document.getElementById('secondIngredient');
    let thirdDiv = document.getElementById('thirdIngredient');
    let  fourthDiv = document.getElementById('fourthIngredient'); 

    div.push(firstDiv);
    div.push(secondDiv);
    div.push(thirdDiv);
    div.push(fourthDiv);

     for(let i = 0; i < 4; i++){
            const HTMLstring = "<p>Ingredient "+(i+1)+ "</p><br>"+
            "<img src='" + globals.chosenIngredients[i].image+ "'>"+
            "<p>" + globals.chosenIngredients[i].name + "</p> <br>"+
            "<p> value:" + globals.chosenIngredients[i].value + "    weight: "+ globals.chosenIngredients[i].weight + "</p> <br>"+
            "<p>" + globals.chosenIngredients[i].effects[0] + "     "+ globals.chosenIngredients[i].effects[1] + "</p> <br>"+
            "<p>" + globals.chosenIngredients[i].effects[2] + "     "+ globals.chosenIngredients[i].effects[3] + "</p> <br>";

            div[i].innerHTML = HTMLstring;

            console.log(HTMLstring);
     }
         
}

export {
    createPotion,
    select4Ingredients,
    print4Ingredients,
}