'use strict';
/**
 * ResourceManager
 * It manages the reource generation and its use.
 * It can start with a predefined quantity of coins and/or maxCoins as in
 * the case of loading a saved game. for that just:
 * va resourceManager = ()(isDebugEnabled, coins, maxCoins);
 * @param {boolean} isDebugEnabled
 * @param {int} coins
 * @param {int} maxCoins
 */
var resourceManager = (function resourceManager(isDebugEnabled, coins, maxCoins) {
    var coins = coins || 0;
    var maxCoins = maxCoins || coins;
    var isDebugEnabled = isDebugEnabled || false;


    /**
     * adds the amount informed to the current quantity of coins
     * then returns the current quantity of coins.
     * @param {int} value 
     */
    var Produce = function (value)
    {        
        coins += value;
        if (coins > maxCoins)
        {
            maxCoins = coins;
            if (isDebugEnabled)
                console.warn(`Debug: resourceManager.Produce called. MaxCoins updated: ${value}`);
        }
        if (isDebugEnabled)
                console.warn(`Debug: resourceManager.Produce called, ${value} produced.`);
        return coins;
    };

    /**     
     * Returns true if it is able to spend the value, false otherwise
     * @param {int} value 
     */
    var Spend = function (value)
    {
        var spent = false;
        if (coins >= value)
        {
            coins = Math.floor(coins - value);            
            if (isDebugEnabled)
                console.warn(`Debug: resourceManager.Spend called, ${value} spent.`);
            spent = true;            
        }
        else
        {
            if (isDebugEnabled)
                console.warn(new Error("Tiny Idle Game Framework: Player doesn't have enough resource to spend."));   
        }
        return spent;
    };

    var getCurrentCoins = function () 
    {
        return coins;
    };

    var getMaxCoins = function () 
    {
        return maxCoins;
    };
    return {
        Produce: Produce,
        Spend: Spend,
        getCurrentCoins: getCurrentCoins,
        getMaxCoins: getMaxCoins
    }
})(false);