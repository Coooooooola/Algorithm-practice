function preferenceList(preferences) {
	const nexts = {}
	preferences.forEach(list => {
		for (let i = 0; i + 1 < list.length; i++) {
			if (!nexts[list[i]]) {
				nexts[list[i]] = new Set()
			}
			nexts[list[i]].add(list[i + 1])
		}
	})

	const degrees = {}
	Object.keys(nexts).forEach(from => {
		if (!degrees[from]) {
			degrees[from] = 0
		}
		for (const to of nexts[from].values()) {
			if (!degrees[to]) {
				degrees[to] = 1
			} else {
				degrees[to]++
			}
		}
	})
	
	const zeros = []
	Object.keys(degrees).forEach((edge) => {
		if (degrees[+edge] === 0) {
			zeros.push(+edge)
		}
	})
	console.log(degrees, nexts)
	
	const ret = []
	while (zeros.length) {
		const edge = zeros.pop()
		ret.push(edge)
		if (nexts[edge]) {
			for (const to of nexts[edge].values()) {
				console.log(to)
				degrees[to]--
				if (degrees[to] === 0) {
					zeros.push(to)
				}
			}
		}
	}
	return ret
}

const preferences = [
	[1,5,7,9],
	[1,9,5,8],
	[2,1,7,8],
	[2,3,7,9]
]

preferenceList(preferences)