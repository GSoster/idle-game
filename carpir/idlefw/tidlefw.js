"use strict";

/**
 * Tiny Idle Game FrameWork (TIG FW / Tidle)
 * 
 * Event Handler
 * 
 * This file holds the logic for the events. It works as follows:
 * An event is captured, a callback function is called to work with the event.
 * OBS.:  not even Event handler functions are  allowed to start with lower case.
 */

// ########### Declares the logic 
//TODO: the player deduced value logic should be here, not in the onItemBought function of each item.
//TODO: define if UIUpdateHelpersList should be moved to SpendResource..
function OnItemBought(event) {
    //calls the function OnItemBought from the target item.
    //ex.: bought a helper with ID = 2. Calls the function OnItemBought from helper#2    
    var item = event.detail;    
    if (resourceManager.Spend(item.buyPrice))
    {        
        player.helpers.push(item);
        event.detail.OnItemBought();
        UIUpdateCoinsCount();
        UIUpdateHelpersList();
    }    
    
}

function OnLevelUp(event) {

}

function PlayAreaOnClick(e) {
    console.log("Clicou!");
    
    totalAmountOfClicks++;
    
    //Click EFFECT
    // Remove any old one
    $(".ripple").remove();

    // Setup
    var posX = $(this).offset().left,
        posY = $(this).offset().top,
        buttonWidth = $(this).width(),
        buttonHeight = $(this).height();
    // Add the element
    $(this).prepend("<span class='ripple'></span>");


    // Make it round!
    if (buttonWidth >= buttonHeight) {
        buttonHeight = buttonWidth;
    } else {
        buttonWidth = buttonHeight;
    }

    // Get the center of the element
    var x = e.pageX - posX - buttonWidth / 2;
    var y = e.pageY - posY - buttonHeight / 2;


    // Add the ripples CSS and start the animation
    $(".ripple").css({
        width: buttonWidth,
        height: buttonHeight,
        top: y + 'px',
        left: x + 'px'
    }).addClass("rippleEffect");
}

// ########### Self Invoking function to add eventListeners 
(function () {
    //General event handlers
    document.addEventListener('OnItemBought', OnItemBought);
    document.addEventListener('OnLevelUp', OnLevelUp);

    //Event Handlers for specific areas
    const ui_play_area = document.getElementById('ui-play-area');
    ui_play_area.addEventListener('click', PlayAreaOnClick);
})();
//other functions

function ProduceResource(value) {
    resourceManager.Produce(value);
     //should it be here??
}


//GAME LOOP

function updateLogic () 
{
    resourceManager.Produce(player.currentProductionValue);
}

function updateGraphics ()
{
    UIUpdateCoinsCount();
    UIUpdateHelpersList();
    UIUpdateRPC();
}


//TODO: think about how a status should affect this function(Eg.: status makes production go up 20%..)
setInterval(function () {    
    if (!player.helpers.length || player.helpers.length <= 0)
    {        
        return;
    }
    player.CalculateTotalProductionValue();
    console.log("Valor produzido: " + player.currentProductionValue);
    //ProduceResource(player.currentProductionValue);
    updateLogic();    
    updateGraphics()
    //logic to handle status

    
}, 1000);

//