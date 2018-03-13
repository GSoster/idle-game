'use strict';

var resourceManager = (function resourceManager(isDebugEnabled) {
    var coins = 0;
    var maxCoins = coins;
    var isDebugEnabled = isDebugEnabled || false;


    var Produce = function (value)
    {
        console.log(` value = ${value}`);
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
     * If there is enought resource to spend then return the total amount of resource - value spent
     * otherwise returns false.
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