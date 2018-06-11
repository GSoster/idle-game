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

