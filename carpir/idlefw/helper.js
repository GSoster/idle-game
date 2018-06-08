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

}