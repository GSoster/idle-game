/**
 * Total Production Value
 */
QUnit.test( "Total Production Value should be zero when no helper were added", function( assert ) {
    var hm = new HelperManager();    
    var result = hm.CalculateTotalProductionValue();
    var expected = 0;
    assert.equal(result, expected, `currentProductionValue ${result} when no value is specified at creation`);
});


QUnit.test( "Total Production Value should be 1 when added one helper (1 production value)", function( assert ) {
    var hm = new HelperManager();   
    var expected = 1; 
    var helper = new Helper('','',10,expected);
    helper.quantity = 1;
    hm.helpers.push(helper);    
    var result = hm.CalculateTotalProductionValue();
    assert.equal(result, expected, `currentTotalProductionValue ${result} when 1 helper (1 production value)`);
});

QUnit.test( "Total Production Value should be 3 when added three helpers (1 production value)", function( assert ) {
    var hm = new HelperManager();   
    var expected = 3; 
    var helper = new Helper('','',10,1);
    helper.quantity = 3;
    hm.helpers.push(helper);    
    var result = hm.CalculateTotalProductionValue();
    assert.equal(result, expected, `currentTotalProductionValue ${result} when 3 helper (1 production value)`);
});

QUnit.test( "Total Production Value should be 0 when added -3 helpers (1 production value)", function( assert ) {
    var hm = new HelperManager();   
    var expected = 0; 
    var helper = new Helper('','',10,1);
    helper.quantity = -3;
    hm.helpers.push(helper);    
    var result = hm.CalculateTotalProductionValue();    
    assert.equal(result, expected, `currentTotalProductionValue ${result} when -3 helper (1 production value)`);
});

/**
 * TotalProductionByHelperName
 */
QUnit.test( "TotalProductionByHelperName Value should be 0 when helpers quantity = 0", function( assert ) {
    var hm = new HelperManager();   
    var expected = 0; 
    var helperName = 'testHelper';
    var helper = new Helper(helperName,'',10,1);//default quantity is zero
    hm.helpers.push(helper);
    var result = hm.CalculateTotalProductionByHelperName(helperName);
    assert.equal(result, expected, `TotalProductionByHelperName ${result} when 1 helper (1 production value)`);
});

QUnit.test( "TotalProductionByHelperName Value should be 1 when 1 helper added - (1 production value)", function( assert ) {
    var hm = new HelperManager();   
    var expected = 1; 
    var helperName = 'testHelper';
    var helper = new Helper(helperName,'',10,1);
    helper.quantity = 1;
    hm.helpers.push(helper);    
    var result = hm.CalculateTotalProductionByHelperName(helperName);    
    assert.equal(result, expected, `TotalProductionByHelperName ${result} when 1 helper (1 production value)`);
});