function flightTicketList(tickets, from, to, pathes, k = Infinity, using = new Set(), subset = [from]) {
	if (from === to) {
		pathes.push(subset.slice())
		return 0
	}
	let ret = Infinity
	if (k === 0) {
		return ret
	}
	if (tickets[from]) {
		tickets[from].filter(([e]) => !using.has(e)).forEach(([e, cost]) => {
			using.add(e)
			subset.push(e)
			ret = Math.min(ret, cost + flightTicketList(tickets, e, to, pathes, k - 1, using, subset))
			subset.pop()
			using.delete(e)
		})
	}
	// tickets.filter(ticket => ticket[0] === from).forEach(([s, e, cost]) => {
	// 	ret = Math.min(ret, cost + flightTicketList(tickets, e, to, k - 1))
	// })
	return ret
}

// let tickets = [
// 	[0, 1, 50],
// 	[0, 2, 30],
// 	[1, 1, 50],
// 	[0, 1, 50],
// 	[0, 1, 50],
// 	[0, 1, 50],
// 	[0, 1, 50],
// 	[0, 1, 50],
// 	[0, 1, 50],
// 	[0, 1, 50],
// 	[0, 1, 50]
// ]
var tickets = {
	0: [
		[1, 20],
		[2, 10]
	],
	1: [
		[3, 40],
		[4, 60]
	],
	2: [
		[1, 5],
		[3, 50],
		[5, 30]
	],
	3: [
		[2, 50],
		[4, 6],
		[5, 2]
	],
	4: [
		[3, 6],
		[6, 80],
		[7, 90]
	],
	5: [
		[4, 10],
		[6, 30],
		[8, 100]
	],
	6: [
		[5, 30],
		[7, 10],
		[8, 40]
	],
	7: [
		[8, 20]
	]
}

var from = 0, to = 8, k = 3

var pathes = []
console.log(flightTicketList(tickets, from, to, pathes))