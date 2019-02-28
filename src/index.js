// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if ( currency > 10000 ) return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    
    const coins = [ {name: 'H', value: 50}, {name: 'Q', value: 25}, {name: 'D', value: 10}, {name: 'N', value: 5}, {name: 'P', value:1} ]
    let result = {}

    coins.forEach( coin => {
      let count = parseInt( currency / coin.value )
      if ( count > 0 ) {
        result[coin.name] = count
        currency %= coin.value
      }
        
    })

    return result
}
