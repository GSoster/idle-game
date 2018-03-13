'use strict';

var resourceManager = (function (isDebugEnabled) {
    'use strict';
    var coins = 0;
    var maxCoins = this.coins;
    var isDebugEnabled = isDebugEnabled || false;


    var Produce = function (value)
    {
        console.log(` value = ${value}`);
        this.coins += value;
        if (this.coins > maxCoins)
        {
            this.maxCoins = this.coins;
            if (isDebugEnabled)
                console.warn(`Debug: resourceManager.Produce called. MaxCoins updated: ${value}`);
        }
        if (isDebugEnabled)
                console.warn(`Debug: resourceManager.Produce called, ${value} produced.`);
        return this.coins;
    }

    var Spend = function (value)
    {
        if (this.coins > value)
        {
            this.coins = Math.floor(this.coins - value);
            if (isDebugEnabled)
                console.warn(`Debug: resourceManager.Spend called, ${value} spent.`);
        }
        else
        {
            console.warn(new Error("Tiny Idle Game Framework: Player doesn't have enough resource to spend."));
        }
        return this.coins;
    }


    return {
        Produce: Produce,
        Spend: Spend,
        getCurrentCoins: this.coins,
        getMaxCoins: maxCoins
    }
})(false);