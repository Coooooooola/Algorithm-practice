var findOrder = function(numCourses, prerequisites) {
    const nexts = new Array(numCourses).fill(0).map(() => [])
    prerequisites.forEach(([from, to]) => nexts[from].push(to))
    return topological(nexts)
};

function topological(nexts) {
	const degrees = new Array(nexts.length).fill(0)
	nexts.forEach(arr => arr.forEach(next => degrees[next]++))
	const zeros = []
	degrees.forEach((v, i) => v === 0 && zeros.push(i))

	const ret = []
	while (zeros.length) {
		const node = zeros.pop()
		ret.push(node)
		nexts[node].forEach(index => {
			degrees[index]--
			if (degrees[index] === 0) {
				zeros.push(index)
			}
		})
	}
	if (degrees.some(val => val !== 0)) {
		return []
	}
	return ret
}

