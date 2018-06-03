var ResourceManagerClass = class 
{
    constructor(coins, maxCoins)
    {
        this.coins = coins || 0;
        this.maxCoins = maxCoins || 0;
    }

    /**
     * adds the amount informed to the current quantity of coins
     * then returns the current quantity of coins.
     * @param {int} value 
     */
    Produce (value)
    {
        if (value <= 0) return this.coins;
        this.coins += value;
        if (this.coins > this.maxCoins)
            this.maxCoins = this.coins;
        return this.coins;
    };

 /**     
     * Returns true if it is able to spend the value, false otherwise
     * @param {int} value 
     */
    Spend (value)
    {
        var spent = false;
        if (value <= 0) return spent;
        if (this.coins >= value)
        {
            this.coins = Math.floor(this.coins - value);
            spent = true;            
        }
        return spent;
    };


}