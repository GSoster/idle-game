var Helper = class 
{    
    constructor (name, description, baseCost, productionValue, graphicRepresentation)
    {        
        this.name = name || 'unnamed helper';
        this.description = description || 'Generic helper that produces resources';
        this.baseCost = baseCost || 10; //how much it costs initially
        this.productionValue = productionValue || 1; //how much it produces after each iteration

        this.buyPrice = this.baseCost;
        this.isUnique = false;        
        this.level = 1;
        this.graphicRepresentation = graphicRepresentation || '';
        this.id;
        this.quantity = 1;        

        //it should not be defined like this, it is necessary to think about a better way to do it.
        //this.graphicRepresentation= __custom_settings.helpers_graphics_folder + name + __custom_settings.helpers_graphics_extension; //img url

        // May be implemented in the future:
        /*
        canEvolve: false, //remove?
        needItem: false, //remove?
        itemNeeded: [], //remove?
        level: 1,
        nextLevelPrice: 100,
        requiredLevel: 0, //required player's level to unlock this specific helper
        unlocksAt: "", // expression to be converted/executed by eval, eg.: maxCoins > 800. PlayerLevel > 15
        */
    }

    /**
    * After the framework have checked if the player has enough money to buy the item
    * the method OnItemBought is called. It them acts as necessary for each item.
    * The default behavior is  to update its price and play an audio.
    */
    OnItemBought ()
    {            
        this.buyPrice = this.CalculatePrice();
        var audio = new Audio("game/assets/sounds/OnItemBought.mp3"); //play audio of being bought
        audio.play();
        //TODO: display animation            
    }


    CalculatePrice ()
    {                
        if (this.quantity == 0)
            return this.baseCost;
        var multiplier = 1.09; //TODO: Move this to a global            
        var price = this.baseCost * Math.pow(multiplier, this.quantity);
        return Math.ceil(price); //The Math.ceil() function returns the smallest integer greater than or equal to a given number.
    }

    OnItemSold ()
    {
        console.error(new Error("Tiny Idle Game Framework: Function not implemented"));
    }
    OnLevelUp ()
    {
        console.error(new Error("Tiny Idle Game Framework: Function not implemented"));
    }

}