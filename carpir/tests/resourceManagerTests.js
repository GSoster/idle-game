/**
 * This tests are related to the resourceManagerModule
 * The resourceManager controls all the resources and how to use or generate them.
 */

QUnit.test( "hello test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});

QUnit.test("ResourceManager should return zero coins by default when no initial value is specified", function (assert) {
    var rmc = new ResourceManagerClass();
    var result = rmc.coins;
    var expected = 0;
    assert.equal(result, expected, 'Default quantity of coins is zero when no initial value is defined.');

});

QUnit.test("ResourceManager should return zero maxCoins by default when no initial value is specified", function (assert) {
    var rmc = new ResourceManagerClass();
    var result = rmc.maxCoins;
    var expected = 0;
    assert.equal(result, expected, 'Default quantity of maxCoins is zero when no initial value is defined.');

});

QUnit.test("ResourceManager should return speficied initial value (12) for coins when it is specified", function (assert) {
    var specifiedValue = 12; //alter only here
    var rmc = new ResourceManagerClass(specifiedValue);
    var result = rmc.coins;
    var expected = specifiedValue;
    assert.equal(result, expected, `value ${specifiedValue} was provided to the constructor, coins should be ${specifiedValue}.`);
});

QUnit.test("ResourceManager should return speficied initial value (20) for maxCoins when it is specified", function (assert) {
    var specifiedValue = 20; //alter only here
    var rmc = new ResourceManagerClass(0,specifiedValue);
    var result = rmc.maxCoins;
    var expected = specifiedValue;
    assert.equal(result, expected, `value ${specifiedValue} was provided to the constructor, maxCoins should be ${specifiedValue}.`);
});