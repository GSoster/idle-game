'use strict';

var resourceManager = (function (isDebugEnabled) {
    'use strict';
    var coins = 0;
    var maxCoins = coins;
    var isDebugEnabled = isDebugEnabled || false;


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
    }

    var Spend = function (value)
    {
        if (coins > value)
        {
            coins = Math.floor(coins - value);            
            if (isDebugEnabled)
                console.warn(`Debug: resourceManager.Spend called, ${value} spent.`);
        }
        else
        {
            console.warn(new Error("Tiny Idle Game Framework: Player doesn't have enough resource to spend."));
        }
        return coins;
    }


    return {
        Produce: Produce,
        Spend: Spend,
        getCurrentCoins: coins,
        getMaxCoins: maxCoins
    }
})(false);