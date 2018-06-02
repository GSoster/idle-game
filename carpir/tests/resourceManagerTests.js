/**
 * This tests are related to the resourceManagerModule
 * The resourceManager controls all the resources and how to use or generate them.
 */

QUnit.test( "hello test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});

QUnit.test("By default resources should be zero", function (assert) {
    var result = resourceManager.getCurrentCoins;
    var expected = 0;
    equal(result, expected, 'Default quantity of coins is zero by default.');

});