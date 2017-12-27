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
        requiredLevel: 0, //required player's level to unlock this specific helper
        unlocksAt: "", // expression to be converted/executed by eval, eg.: maxCoins > 800. PlayerLevel > 15
        OnItemBought: function () {console.error(new Error("Function not implemented"));},
        OnItemSold: function () {console.error(new Error("Function not implemented"));},
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



/**
 * ################# HELPERS STUFF, Should be split into another file.
 */

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
    if (helpersList.length < 1)
        return;
    var ui_helpers_List = document.getElementById(__config.ui_helpers_list);
    helpersList.forEach(element => {ui_helpers_List.appendChild(CreateHelperUIListElement(element));});
}

/**
 * This function clearly should be split in many others.
 * @param {*} helperElement 
 */
function CreateHelperUIListElement(helperElement) 
{   /* visual */
    var ui_helper_element = document.createElement("li");
    ui_helper_element.classList += "ui-helper-list-element";    
    var ui_helper_name = document.createElement("span");
    ui_helper_name.style.fontWeight = "900";
    ui_helper_name.style.display = "block";
    ui_helper_name.innerText = helperElement.name
    var ui_helper_info = document.createElement("span");
    ui_helper_info.style.fontSize = '13px';
    ui_helper_info.innerText = "Price: " + helperElement.buyPrice;
    ui_helper_info.innerText += " Current Quantity: 0";
    ui_helper_info.innerText += " Production: " + helperElement.productionValue;
    ui_helper_info.innerText += "Total Production: 0";
    ui_helper_element.appendChild(ui_helper_name);
    ui_helper_element.appendChild(ui_helper_info);
    //ui_helper_element.innerHTML = ;
    /* logic */
    ui_helper_element.id = "helper-" + helperElement.id;
    var ui_helper_btn_buy = document.createElement('a');
    ui_helper_btn_buy.href = "#";
    ui_helper_btn_buy.appendChild(document.createTextNode("Buy"));
    ui_helper_btn_buy.id = "buy-helper-" + helperElement.id;
    ui_helper_btn_buy.onclick = function () {
        var onItemBoughtEvent = new CustomEvent('OnItemBought', { detail: helperElement });
        document.dispatchEvent(onItemBoughtEvent);
    };
    ui_helper_element.appendChild(ui_helper_btn_buy);

    return ui_helper_element;
}


function CreateHelperLogicElement(helperElement){
    
}

/**
 * Custom settings are defined by the game developer. 
 */
function ApplyCustomSettings()
{
    document.getElementById(__config.ui_resource_name).innerText = __custom_settings.resource_name;
    document.getElementById(__config.ui_max_resource_name).innerText = __custom_settings.max_resource_name;
    document.getElementById(__config.ui_helpers_list_name).innerText = __custom_settings.helpers_list_name;    
}

//test only
InitHelpers();
UIUpdateHelpersList();
ApplyCustomSettings();
// /test only