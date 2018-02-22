"use strict";

/**
 * custom settings holds information related to the specific game. 
 * this configurations should be changed by the developer of the game
 * TODO: This should be moved to a GAME folder or something similar. 
 */
const __custom_settings = 
{
    resource_name: "Coins:",
    max_resource_name: "Max Coins:",
    helpers_list_name: "Helpers",
    helpers_graphics_folder: "game/assets/helpers/",
    helpers_graphics_extension: ".png",
    playArea_image: 'game/assets/clickArea/grass.gif',
}

//Sample of possible final implementation:
//use as example: http://pastebin.com/raw/YrmTqheS
const $_custom_settings = {
    resources: {
        resourseName: "coin",
        maxResourceName: "max coin",
        priceIncreaseMultiplier: 1.09
    },
    ui:{
        textColor: "#fff",
        font: "arial",
        theme: "", //...maybe in the far far future
    },
    helpersConfig:{
        halpersListName: "helpers",
        graphicsFolder: "x/x/x/",
        graphicsExtension: ".png",
    },
    helpersList: {
        Hoe: {
            baseCost: 15,
            produce: 0.1,
            description: "",
            picture: "",//if it goes here there is no need for it in the helpers config
        }
    },
    playArea:{
        clickEffect: "X",
        backgroundImage: "url",
        clickImage: "url"
    }
    
}