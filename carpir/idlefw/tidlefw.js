"use strict";

/**
 * Tiny Idle Game FrameWork (TIG FW)
 * 
 * Event Handler
 * 
 * This file holds the logic for the events. It works as follows:
 * An event is captured, a callback function is called to work with the event.
 * OBS.:  not even Event handler functions are  allowed to start with lower case.
 */

// ########### Declares the logic 
//TODO: the player deduced value logic should be here, not in the onItemBought function of each item.
function OnItemBought(event)
{
    //calls the function OnItemBought from the target item.
    //ex.: bought a helper with ID = 2. Calls the function OnItemBought from helper#2    
    event.detail.OnItemBought();
    UIUpdateCoinsCount();
    UIUpdateHelpersList();
}

function OnLevelUp(event)
{

}

function OnClick()
{
    console.log("clicou");
}

// ########### Self Invoking function to add eventListeners 
(function () {
    //General event handlers
    document.addEventListener('OnItemBought', OnItemBought);
    document.addEventListener('OnLevelUp', OnLevelUp);

    //Event Handlers for specific areas
    const ui_play_area = document.getElementById('ui-play-area');
    ui_play_area.addEventListener('OnClick', OnClick);
})();
//other functions
function ReosourceProduced(value)
{
    player.resources.coins += value;
    if(player.resources.maxCoins < player.resources.coins)
        player.resources.maxCoins = player.resources.coins;
    UIUpdateCoinsCount();
    UIUpdateHelpersList();
}

function ResourceSpent(value)
{
    
}

//GAME LOOP

setInterval(function () {
    var producedValueOnThisTick = player.helpers.reduce(function (accumulator, helper){
        return accumulator += helper.productionValue;
    }, 0);
    console.log("Valor produzido: " +  producedValueOnThisTick);
    ReosourceProduced(producedValueOnThisTick);
}, 1000);

//