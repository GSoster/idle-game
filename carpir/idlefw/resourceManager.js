'use strict';

var resourceManager = (function (isDebugEnabled = false) {
    'use strict';
    var coins = 0;
    var maxCoins = coins;


    var Produce = function (value)
    {
        coins += value;
        if (coins > maxCoins)
            maxCoins = coins;
        return coins;
    }

    var Spend = function (value)
    {
        if (coins > value)
            coins -= value;
        return coins;
    }

    return {
        Produce: Produce,
        Spend: Spend,
    }
})(false);