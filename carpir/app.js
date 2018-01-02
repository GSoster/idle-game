"use strict";

// Globals
var player = {
    //level: 0,
    resources: {
        coins: 0,
        maxCoins: 0
    },
    helpers: [],    
    OnLevelUp: function () {console.error(new Error("Function not implemented"));},
    /*resourceGeneratedPerClick: 1,*/
};
player.helpers.HasHelperWithId = function (id)
{
    var has = false;
    if (player.helpers.length >= 1)
        player.helpers.forEach((x) => {if (x.id === id) has = true;});
    return has;
}

//informs how many helpers with a specific ID there are in the helpers list
//which means: how many helpers of that ID were already bought.
player.helpers.NumberOfHelpersById = function (id)
{
    var count = 0;
    player.helpers.forEach(x => {if(x.id == id){count++;}})
    return count;
}
//returns the total amount that helpers of same ID will produce
player.helpers.TotalProductionByHelperId = function (id)
{
    return player.helpers.filter(helper => helper.id === id).reduce(function (accumulator, helper){
        return accumulator += helper.productionValue;
    }, 0);
}

// ###########


var helpersList = [];
var ID_COUNTER = 0;// static var used to increment the id on 
var createHelper = function (name, description, buyPrice, productionValue) {
    var helperObj = {
        id: ID_COUNTER,
        isUnique: false,
        name: name || "unamed",
        description: description || "",
        buyPrice: buyPrice || 0,
        sellPrice: 0,
        productionValue: productionValue || 0,
        produceRate: 1,
        canEvolve: false,
        needItem: false,
        itemNeeded: [],
        level: 1,
        nextLevelPrice: 100,        
        requiredLevel: 0, //required player's level to unlock this specific helper
        unlocksAt: "", // expression to be converted/executed by eval, eg.: maxCoins > 800. PlayerLevel > 15
        OnItemBought: function () {            
            if (player.resources.coins >= this.buyPrice){
                player.resources.coins -= this.buyPrice;
                player.helpers.push(this);
            }
            else 
                console.error(new Error("Function not implemented"));
                
        },
        OnItemSold: function () {console.error(new Error("Function not implemented"));},
        OnLevelUp: function () {console.error(new Error("Function not implemented"));}
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
//this function should read from file and create helpers, after that add them to the helper list
function InitHelpers()
{
    var playerCharacter = createHelper("Player", "YOU", 10, 1);
    playerCharacter.isUnique = true;
    var hoe = createHelper("hoe", "A hoe that can be used to cut grass", 10, 1);    
    var stringTrimmer = createHelper("string trimmer", "a simple string trimmer.", 20, 2);
    var lawnMower = createHelper("lawn mower", "A simple eletric lawn mower", 30, 3);
    helpersList.push(playerCharacter);
    helpersList.push(hoe);
    helpersList.push(stringTrimmer);
    helpersList.push(lawnMower);
}

function UIUpdateHelpersList() 
{
    if (helpersList.length < 1)
        return;
    var ui_helpers_List = document.getElementById(__config.ui_helpers_list);
    ui_helpers_List.innerHTML = "";
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
    ui_helper_info.innerText += " Current quantity: " + player.helpers.NumberOfHelpersById(helperElement.id);
    ui_helper_info.innerText += " Single helper production: " + helperElement.productionValue;
    ui_helper_info.innerText += "Total production: " + player.helpers.TotalProductionByHelperId(helperElement.id);
    ui_helper_element.appendChild(ui_helper_name);
    ui_helper_element.appendChild(ui_helper_info);
    ui_helper_element.id = "helper-" + helperElement.id;    
    /* logic */
    //only allow to buy a helper if it is not a unique already bought
    if (!helperElement.isUnique || !player.helpers.HasHelperWithId(helperElement.id))
    {
        var ui_helper_btn_buy = document.createElement('a');
        ui_helper_btn_buy.href = "#";
        ui_helper_btn_buy.appendChild(document.createTextNode("Buy"));
        ui_helper_btn_buy.id = "buy-helper-" + helperElement.id;
        ui_helper_btn_buy.onclick = function () {
            var onItemBoughtEvent = new CustomEvent('OnItemBought', { detail: helperElement });
            document.dispatchEvent(onItemBoughtEvent);
        };
        ui_helper_element.appendChild(ui_helper_btn_buy);
    }

    return ui_helper_element;
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
ApplyCustomSettings();
//To run on every interaction/based on timer:
UIUpdateHelpersList();
// /test only


/**
 * DEPRECATED
 * 
 * The functions below my serve a purpose in the fucture, but right now are not needed
 */

function DEPRECATED_UIUpdatePlayerInfo()
{
    var ui_player_level = document.getElementById('ui-player-level');
    ui_player_level.innerText = player.level;
}