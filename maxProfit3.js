var maxProfit = function(prices) {
	let hold1 = Infinity, hold2 = Infinity
	let release1 = 0, release2 = 0
	prices.forEach(price => {
		release2 = Math.max(release2, price - hold2)
		hold2 = Math.min(hold2, price - release1)
		release1 = Math.max(release1, price - hold1)
		hold1 = Math.min(hold1, price)

		console.log('price=' + price, release2, hold2, release1, hold1)
	})
	return release2
}

var prices = [3,3,5,0,0,3,1,4]
maxProfit(prices)