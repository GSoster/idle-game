"use strict";
/**
 * This file is different from the others in the sense it is not a class
 * TODO: Avail: SHOULD import config and customSettings?
 */

var UIManager = class
{
    //receives file to load UI info
    constructor () 
    {

    }

    /**
     * TODO: should use params
     */
    static DefinePlayAreaImage ()
    {
        var playArea = document.getElementById(__config.ui_play_area);
        playArea.style.backgroundImage = 'url(' + __custom_settings.playArea_image + ')';
    }

    static UpdateRPC(totalProductionValue) {
        //rpc should use __config.rpc instead of a direct value        
        document.getElementById('rpc').innerText = ` ${totalProductionValue} `;
    }

    /**
    * Updates the interface with the current quantity of coins and
    * max coins.
    */
    static UpdateCoinsCount(coins, maxCoins) {
        //console.log(`UIUpdateCoinsCount called. MaxCoins: ${resourceManager.maxCoins}  - CurrentCoins: ${resourceManager.coins}`);
        document.getElementById(__config.ui_max_coins).innerText = ` ${maxCoins} `;
        document.getElementById(__config.ui_coins).innerText = ` ${coins} `;
    }

    /**
     * receives an array of elements from Helper class 
     * @param {Array of Helpers} helpersList 
     */
    static UpdateHelpersList(helpersList) {    
        if (helpersList.length < 1)    
            return;
        var ui_helpers_List = document.getElementById(__config.ui_helpers_list);
        ui_helpers_List.innerHTML = "";
        
        helpersList.forEach(element => {
            ui_helpers_List.appendChild(CreateHelperUIListElement(element));
        });
    }

}