var maxProfit = function(prices) {
    let low = Infinity
    const lower = prices.map(val => {
        low = Math.min(low, val)
        return low
    })
    let high = -Infinity
    const higher = prices.reverse().map(val => {
        high = Math.max(high, val)
        return high
    }).reverse()
    let ret = 0
    for (let i = 0; i < prices.length; i++) {
        ret = Math.max(ret, higher[i] - lower[i])
    }
    return ret
};


var maxProfit = function(prices) {
    let buyPrice = Infinity
    let ret = 0
    prices.forEach(price => {
        if (price > buyPrice) {
            ret = Math.max(ret, price - buyPrice)
        } else {
            buyPrice = price
        }
    })
    return ret
};