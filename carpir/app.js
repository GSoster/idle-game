"use strict";

// Globals - player should be renamed to GAME...?
var totalAmountOfClicks = 0;
var player = {
    //level: 0,    
    helpers: [],
    currentProductionValue: 0,
    CalculateTotalProductionValue: function () {
        this.currentProductionValue = player.helpers.reduce(function (accumulator, helper) {
            return accumulator += helper.productionValue;
        }, 0);
        return this.currentProductionValue;
    },
    OnLevelUp: function () {
        console.error(new Error("Function not implemented"));
    },
    /*resourceGeneratedPerClick: 1,*/
};
player.helpers.HasHelperWithId = function (id) {
    var has = false;
    if (player.helpers.length >= 1)
        player.helpers.forEach((x) => {
            if (x.id === id) has = true;
        });
    return has;
}

//returns the total amount that helpers of same ID will produce
player.helpers.TotalProductionByHelperId = function (id) {
    return player.helpers.filter(helper => helper.id === id).reduce(function (accumulator, helper) {
        return accumulator += helper.productionValue;
    }, 0);
}

// ###########
/**
 * GAME SETTINGS 
 */
//TODO: move this to a function inside a GAME Object







/**
 * Custom settings are defined by the game developer. 
 */
function ApplyCustomSettings() {
    document.getElementById(__config.ui_resource_name).innerText = __custom_settings.resource_name;
    document.getElementById(__config.ui_max_resource_name).innerText = __custom_settings.max_resource_name;
    document.getElementById(__config.ui_helpers_list_name).innerText = __custom_settings.helpers_list_name;
}

//InitHelpers();
var helperManager = new HelperManager();
helperManager.InitHelpers();
ApplyCustomSettings();
//To run on every interaction/based on timer:
UIManager.UpdateHelpersList(helperManager.helpers);
UIManager.DefinePlayAreaImage();