function suggestion(self, wishlists, max) {
	const scoreSet = new Set()
	self.forEach(wish => scoreSet.add(wish))

	const list = []
	wishlists.forEach(wishes => {
		let score = 0
		const rest = []
		wishes.forEach(wish => {
			if (scoreSet.has(wish)) {
				score++
			} else {
				rest.push(wish)
			}
		})
		list.push({score, rest})
	})
	list.sort(({score: s1}, {score: s2}) => s2 - s1)
	const flattenList = list.reduce((a, b) => a.concat(b.rest), [])
	const set = new Set()
	const ret = []
	for (let j = 0; ret.length < max && j < flattenList.length; j++) {
		const wish = flattenList[j]
		if (!set.has(wish)) {
			ret.push(wish)
			set.add(wish)
		}
	}
	return ret
}



let self = ['a', 'b', 'c', 'd']
let wishlists = [
	['a', 'b', 'e', 'f'],
	['a', 'c', 'd', 'g']
]

console.log(suggestion(self, wishlists, 2))