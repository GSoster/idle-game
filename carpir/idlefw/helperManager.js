'use strict';

var helperManager = class
{
    constructor () 
    {
        this.currentProductionValue = 0;
        this.helpers = [];
    }
    
    
    /**
     * Calculates the total production value based on the 
     * current production value of each helper
     */
    CalculateTotalProductionValue () 
    {
        this.currentProductionValue = this.helpers.reduce(function (accumulator, helper) {
            return accumulator += helper.productionValue;
        }, 0);
        return this.currentProductionValue;
    }

    /**
     * Verifies if the helpers array has a helper with
     * the provided ID.
     * @param {int} id 
     */
    HasHelperWithId (id) 
    {
        var has = false;
        if (this.helpers.length >= 1)
            this.helpers.forEach((helper) => {
                if (helper.id === id) has = true;
            });
        return has;
    }



    /**
     * informs how many helpers with a specific ID there are in the helpers list
     * which means: how many helpers of that ID were already bought.
     * @param {int} id 
     */
    NumberOfHelpersById (id)
    {
        var count = 0;
        this.helpers.forEach(helper => {
            if (helper.id == id) {
                count++;
            }
        });
    return count;
    }


    //returns the total amount that helpers of same ID will produce
    TotalProductionByHelperId (id)
    {
        return this.helpers.filter(helper => helper.id === id).reduce(function (accumulator, helper) {
            return accumulator += helper.productionValue;
        }, 0);
    }

}