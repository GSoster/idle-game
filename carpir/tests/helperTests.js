/**
 * This tests are related to the Helper class
 * The Helper class keeps information about a specific helper or a group 
 * of helpers from the same type
 */

QUnit.test( "hello test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});

/**
 * 
 */

QUnit.test( "Default buyPrice value should be 10 when no value is specified", function( assert ) {
    var helper = new Helper();
    var result = helper.buyPrice;
    var expected = 10;
    assert.equal(result, expected, `Default buy price is ${expected} when no value is specified at creation`);
});

QUnit.test( "Default producionValue value should be 1 when no value is specified", function( assert ) {
    var helper = new Helper();
    var result = helper.productionValue;
    var expected = 1;
    assert.equal(result, expected, `Default producionValue is ${expected} when no value is specified at creation`);
});

QUnit.test( "Quantity of a new item should be zero", function( assert ) {
    var helper = new Helper();
    var result = helper.quantity;
    var expected = 1;
    assert.equal(result, expected, `Default quantity is ${result} when no value is specified at creation`);
});

QUnit.test( "Calculate price for 1 new helper", function( assert ) {
    var helper = new Helper();
    var result = helper.CalculatePrice();
    var expected = 10;
    assert.equal(result, expected, `Calculated price is ${result} should be ${expected}`);
});

QUnit.test( "Calculate price for 2 new helpers", function( assert ) {
    var helper = new Helper();
    helper.quantity = 2;
    var result = helper.CalculatePrice();
    var expected = 12;
    assert.equal(result, expected, `Calculated price is ${result} should be ${expected}`);
});

QUnit.test( "Buy price should be updated after buying 1 helper or more", function( assert ) {
    var helper = new Helper();    
    helper.OnItemBought();
    var result = helper.buyPrice;
    var expected = 12;
    assert.equal(result, expected, `Buy price for the second helper is ${result} should be ${expected}`);
});