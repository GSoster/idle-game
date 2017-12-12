"use strict";

// Globals
var player = {
    level: 0,
    resources: {
        coins: 0,
        maxCoins: 0
    },    
};
var helpersList = [];
var ID_COUNTER = 0;// static var used to increment the id on 
var createHelper = function (name, description, buyPrice, productionValue) {
    var helperObj = {
        id: ID_COUNTER,
        name: name || "unamed",
        description: description || "",
        buyPrice: buyPrice || 0,
        sellPrice: 0,
        productionValue: productionValue || 0,
        produceRate: 1,
        canEvolve: false,
        needItem: false,
        itemNeeded: [],
        requiredLevel: 0,
        onItemBought: function () {console.error(new Error("Function not implemented"));},
        onItemSold: function () {console.error(new Error("Function not implemented"));},
    };
    ID_COUNTER++;
    return helperObj;
}


/**
 * GAME SETTINGS 
 */
//TODO: move this to a function inside a GAME Object


function UpdateCoinsCount(qtd) 
{
    player.resources.maxCoins += qtd;
    player.resources.coins += qtd;    
}

/**
 * Updates the interface with the current quantity of coins and
 * max coins.
 */
function UIUpdateCoinsCount() 
{
    document.getElementById(__config.ui_max_coins).innerText = player.resources.maxCoins;
    document.getElementById(__config.ui_coins).innerText = player.resources.coins;    
}

//TODO: move this for a config function inside a GAME Object
var playArea = document.getElementById(__config.ui_play_area);
playArea.addEventListener('click', function(){
    UpdateCoinsCount(1);
    UIUpdateCoinsCount();
});


function InitHelpers()
{
    var hoe = createHelper("hoe", "A hoe that can be used to cut grass", 100, 1);    
    var stringTrimmer = createHelper("string trimmer", "a simple string trimmer.", 400, 2);
    var lawnMower = createHelper("lawn mower", "A simple eletric lawn mower", 600, 3);
    helpersList.push(hoe);
    helpersList.push(stringTrimmer);
    helpersList.push(lawnMower);
}

function UIUpdateHelpersList() 
{
    var ui_helpers_List = document.getElementById(__config.ui_helpers_list);    
    for ( var i = 0; i < helpersList.length; i++ )
    {
        var ui_helper_element = document.createElement('li');
        ui_helper_element.innerHTML = helpersList[i].name;
        ui_helpers_List.appendChild(ui_helper_element);
    }
}

//test only
InitHelpers();
UIUpdateHelpersList();
// /test only