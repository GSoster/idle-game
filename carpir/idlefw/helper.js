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
        //global helperManager should be used here        
        var owned = player.helpers.NumberOfHelpersById(this.id);
        if (owned === 0)
            return this.baseCost;
        var multiplier = 1.09; //TODO: Move this to a global            
        var price = baseCost * Math.pow(multiplier, owned);
        return Math.ceil(price);
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