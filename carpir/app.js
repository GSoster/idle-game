"use strict";

// Globals
var player = {
    resources: {
        coins: 0,
        maxCoins: 0
    },    
};
var helpersList = [];
var ID_COUNTER = 0;// static var used to increment the id on 
var createHelper = function () {
    var helperObj = {
        id: ID_COUNTER,
        name: "unamed",
        description: "",
        buyPrice: 0,
        sellPrice: 0,
        productionValue: 0,
        produceRate: 0,
        canEvolve: false,
        needItem: false,
        itemNeeded: [],
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
function RegisterClick(qtd) 
{
    console.log("Recebey: " + qtd);
}

//TODO: move this for a config function inside a GAME Object
var playArea = document.getElementById(__config.ui_play_area);
playArea.addEventListener('click', function(){RegisterClick(1)});