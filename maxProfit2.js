var maxProfit = function(prices) {
	let ret = 0
	for (let i = 1; i < prices.length; i++) {
		ret = Math.max(ret, ret + prices[i] - prices[i - 1])
	}
	return ret
};