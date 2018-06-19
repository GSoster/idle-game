"use strict";
/**
 * This file is different from the others in the sense it is not a class
 */

var UIManager = class
{
    //receives file to load UI info
    constructor () 
    {

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

}