'use strict';

var HelperManager = class
{
    constructor () 
    {
        this.currentProductionValue = 0;
        this.helpers = [];
    }
    
    /**
     * This function should load and create helpers,
     * then add them to the helper list.
     * TODO: In the future make it read from a file
     */
    InitHelpers () 
    {
        var playerCharacter = new Helper("hedge trimmer", "a commom and simple hedge trimmer ", 10, 1,  __custom_settings.helpers_graphics_folder + 'hedge trimmer' + __custom_settings.helpers_graphics_extension);
        playerCharacter.isUnique = true;
        
        //test only
        var hoe = new Helper("hoe", "A hoe that can be used to cut grass", 10, 1, __custom_settings.helpers_graphics_folder + 'hoe' + __custom_settings.helpers_graphics_extension);
        var stringTrimmer = new Helper("string trimmer", "a simple string trimmer.", 20, 2, __custom_settings.helpers_graphics_folder + 'string trimmer' + __custom_settings.helpers_graphics_extension);
        var lawnMower = new Helper("lawn mower", "A simple eletric lawn mower", 30, 3, __custom_settings.helpers_graphics_folder + 'lawn mower' + __custom_settings.helpers_graphics_extension);
        // /test only
        this.helpers.push(playerCharacter);
        this.helpers.push(hoe);
        this.helpers.push(stringTrimmer);
        this.helpers.push(lawnMower);
    }

    
    /**
     * Calculates the total production value based on the 
     * current production value of each helper
     */
    CalculateTotalProductionValue () 
    {
        this.currentProductionValue = this.helpers.reduce(function (accumulator, helper) {
            var value = 0;
            if (helper.quantity >= 1)
                value = helper.productionValue * helper.quantity;
            return accumulator += value;
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