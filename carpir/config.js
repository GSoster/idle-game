"use strict";

/**
 * This file contains configuration information that should be able to be customized 
 * to allow different templates to work without code rewriting.
 * Fields that start with UI are related to HTML elements.
 * TODO: this should be moved to a Framework folder or something similiar.
 */

const __config = 
{
    ui_play_area: "ui-play-area", //if of where the player will click to gain resources
    ui_helpers_list: "ui-helpers-list",//list where the player helpers objects will be shown
    ui_max_coins: "ui-max-coins", //display the total number of max resource (int value)
    ui_coins: "ui-coins", //display the current number of resource (int value)
    ui_resource_name: "ui-resource-name", //display the resource name (eg.: coins)
    ui_max_resource_name: "ui-max-resource-name", //display the max resource name (eg.: max coins)
    ui_helpers_list_name: "ui-helpers-list-name", //display the title on top of helpers list
};

/**
 * custom settings holds information related to the specific game. 
 * this configurations should be changed by the developer of the game
 * TODO: This should be moved to a GAME folder or something similar. 
 */
const __custom_settings = 
{
    resource_name: "Coins",
    max_resource_name: "Max Coins",
    helpers_list_name: "111Helpers"
}



function ApplySettings () 
{

}