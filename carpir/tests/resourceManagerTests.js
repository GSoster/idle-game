/**
 * This tests are related to the resourceManagerModule
 * The resourceManager controls all the resources and how to use or generate them.
 */

QUnit.test( "hello test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});

/**
 * ################  INITIAL VALUES FOR COINS AND MAXCOINS ################
 */
QUnit.test("ResourceManager should return zero coins by default when no initial value is specified", function (assert) {
    var rmc = new ResourceManager();
    var result = rmc.coins;
    var expected = 0;
    assert.equal(result, expected, 'Default quantity of coins is zero when no initial value is defined.');

});

QUnit.test("ResourceManager should return zero maxCoins by default when no initial value is specified", function (assert) {
    var rmc = new ResourceManager();
    var result = rmc.maxCoins;
    var expected = 0;
    assert.equal(result, expected, 'Default quantity of maxCoins is zero when no initial value is defined.');

});

QUnit.test("ResourceManager should return speficied initial value (12) for coins when it is specified", function (assert) {
    var specifiedValue = 12; //alter only here
    var rmc = new ResourceManager(specifiedValue);
    var result = rmc.coins;
    var expected = specifiedValue;
    assert.equal(result, expected, `value ${specifiedValue} was provided to the constructor, coins should be ${specifiedValue}.`);
});

QUnit.test("ResourceManager should return speficied initial value (20) for maxCoins when it is specified", function (assert) {
    var specifiedValue = 20; //alter only here
    var rmc = new ResourceManager(0,specifiedValue);
    var result = rmc.maxCoins;
    var expected = specifiedValue;
    assert.equal(result, expected, `value ${specifiedValue} was provided to the constructor, maxCoins should be ${specifiedValue}.`);
});

QUnit.test("ResourceManager should return zero (20) for coins when the initial value provided is < zero", function (assert) {
    var specifiedValue = -20; //alter only here
    var rmc = new ResourceManager(specifiedValue);
    var result = rmc.coins;
    var expected = 0;
    assert.equal(result, expected, `value ${specifiedValue} was provided to the constructor, coins should be ${result}.`);
});


/**
 * ################  PRODUCE COINS, UPDATE MAXCOINS ################
 */

QUnit.test('Initial coins = 0, produced 20, current quantity of coins should be 20', function (assert){
    var specifiedValue = 20; //alter only here
    var rmc = new ResourceManager();
    var result = rmc.Produce(specifiedValue);
    var expected = specifiedValue;
    assert.equal(result, expected, `Produced ${specifiedValue} coins, total amount of COINS: ${result}.`);
});

QUnit.test('Initial coins = 0, produced 20, current quantity of maxCoins should be 20', function (assert){
    var specifiedValue = 20; //alter only here
    var rmc = new ResourceManager();
    rmc.Produce(specifiedValue);
    var result = rmc.maxCoins;
    var expected = specifiedValue;
    assert.equal(result, expected, `Produced ${specifiedValue} coins, total amount of MAXCOINS: ${result}.`);
});

QUnit.test('Initial coins = 0, produced -20, current quantity of coins should be 0', function (assert){
    var specifiedValue = -20; //alter only here
    var rmc = new ResourceManager();
    var result = rmc.Produce(specifiedValue);
    var expected = 0;
    assert.equal(result, expected, `Produced ${specifiedValue} coins, total amount of COINS: ${result}.`);
});

QUnit.test('Initial coins = 0, produced -20, current quantity of maxCoins should be 0', function (assert){
    var specifiedValue = -20; //alter only here
    var rmc = new ResourceManager();
    rmc.Produce(specifiedValue);
    var result = rmc.maxCoins;    
    var expected = 0;
    assert.equal(result, expected, `Produced ${specifiedValue} coins, total amount of maxCoins: ${result}.`);
});

/**
 * ################  SPEND COINS ################
 */

QUnit.test('Initial coins = 20, Spent 0, current quantity of coins should be 20', function (assert){
    var specifiedValue = 20; //alter only here
    var rmc = new ResourceManager(specifiedValue);
    rmc.Spend(0);
    var result = rmc.coins;
    var expected = specifiedValue;
    assert.equal(result, expected, `Spent 0 coins, total amount of COINS: ${result}.`);
});


QUnit.test('Initial coins = 20, Spent 15, current quantity of coins should be 5', function (assert){
    var specifiedValue = 20; //alter only here
    var rmc = new ResourceManager(specifiedValue);
    rmc.Spend(15);
    var result = rmc.coins;
    var expected = 5;
    assert.equal(result, expected, `Spent 15 coins, total amount of COINS: ${result}.`);
});

QUnit.test('Initial coins = 20, Spent 20, current quantity of coins should be 0', function (assert){
    var specifiedValue = 20; //alter only here
    var rmc = new ResourceManager(specifiedValue);
    rmc.Spend(specifiedValue);
    var result = rmc.coins;
    var expected = 0;
    assert.equal(result, expected, `Spent ${specifiedValue} coins, total amount of COINS: ${result}.`);
});

QUnit.test('Initial coins = 20, Spent 25, current quantity of coins should be 20 (no value is spent)', function (assert){
    var specifiedValue = 20; //alter only here
    var rmc = new ResourceManager(specifiedValue);
    rmc.Spend((specifiedValue + 5));
    var result = rmc.coins;
    var expected = specifiedValue;
    assert.equal(result, expected, `Spent ${specifiedValue + 5} coins, total amount of COINS: ${result}.`);
});

QUnit.test('Initial coins = 20, Spent -25, current quantity of coins should be 20 (no value is spent or added)', function (assert){
    var specifiedValue = 20; //alter only here
    var rmc = new ResourceManager(specifiedValue);
    rmc.Spend(-25);
    var result = rmc.coins;
    var expected = specifiedValue;
    assert.equal(result, expected, `Spent -25 coins, total amount of COINS: ${result}.`);
});