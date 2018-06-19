"use strict";
/**
 * This file is different from the others in the sense it is not a class
 * TODO: Avail: SHOULD import config and customSettings?
 */

var UIManager = class
{
    //receives file to load UI info
    constructor () 
    {

    }

    /**
     * TODO: should use params
     */
    static DefinePlayAreaImage ()
    {
        var playArea = document.getElementById(__config.ui_play_area);
        playArea.style.backgroundImage = 'url(' + __custom_settings.playArea_image + ')';
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

    /**
     * receives an array of elements from Helper class 
     * @param {Array of Helpers} helpersList 
     */
    static UpdateHelpersList(helpersList) {    
        if (helpersList.length < 1)    
            return;
        var ui_helpers_List = document.getElementById(__config.ui_helpers_list);
        ui_helpers_List.innerHTML = "";
        
        helpersList.forEach(element => {
            ui_helpers_List.appendChild(this.CreateHelperUIListElement(element));
        });
    }


    /**
 * TODO: This function clearly should be split in many others.
 * TODO: should not use helperManager directly. only the element passed as a parameter
 * @param {*} helperElement 
 */
    static CreateHelperUIListElement(helperElement) { /* visual */
        var ui_helper_element = document.createElement("li");
        //header - helper name
        ui_helper_element.classList += "ui-helper-list-element";
        var ui_helper_name = document.createElement("span");
        ui_helper_name.classList += "ui-helper-name";
        ui_helper_name.innerText = helperElement.name;
        //image
        var ui_helper_graphic = document.createElement('img');
        ui_helper_graphic.classList += "ui-helper-graphic-representation";
        ui_helper_graphic.src = helperElement.graphicRepresentation;
        //helper info
        var ui_helper_info = document.createElement("div");
        ui_helper_info.classList += "ui-helper-info";
        ui_helper_info.innerText = "Price: " + helperElement.buyPrice;    
        ui_helper_info.innerText += "Production: " + helperManager.CalculateTotalProductionByHelperName(helperElement.name);
        //add to where it belongs
        ui_helper_element.appendChild(ui_helper_name);
        ui_helper_element.appendChild(ui_helper_graphic);
        ui_helper_element.appendChild(ui_helper_info);
        ui_helper_element.id = "helper-" + helperElement.name;
        /* logic */
        //only allow to buy a helper if it is not a unique already bought
        if (!helperElement.isUnique || !player.helpers.HasHelperWithId(helperElement.id)) {    
            var ui_helper_btn_buy = document.createElement('a');
            ui_helper_btn_buy.href = "#";
            ui_helper_btn_buy.classList += "ui-helper-btn-buy"
            ui_helper_btn_buy.appendChild(document.createTextNode("Buy"));
            ui_helper_btn_buy.id = "buy-helper-" + helperElement.id;
            ui_helper_btn_buy.onclick = function () {
                var onItemBoughtEvent = new CustomEvent('OnItemBought', {
                    detail: helperElement
                });
                document.dispatchEvent(onItemBoughtEvent);
            };
            ui_helper_element.appendChild(ui_helper_btn_buy);
        }

        return ui_helper_element;
    }

}