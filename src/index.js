// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if ( currency > 10000 ) return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    
    let COINS = [ {name: 'H', value: 50}, {name: 'Q', value: 25}, {name: 'D', value: 10}, {name: 'N', value: 5}, {name: 'P', value:1} ]
    let result = {}
    let i = 0

    while ( currency > 0 ) {
        let coin = COINS[i]

        if ( currency - coin.value < 0 ) {
            i += 1
            continue
        }
        
        result[coin.name] = (coin.name in result) ? result[coin.name] + 1 : 1

	currency -= coin.value
    }
    return result
}
