var findOrder = function(numCourses, prerequisites) {
    const visited = new Array(numCourses).fill(false)
	const using = new Array(numCourses).fill(false)

	const nexts = new Array(numCourses).fill(0).map(() => [])
	prerequisites.forEach(([from, to]) => nexts[from].push(to))

	const ret = []
	for (let i = 0; i < visited.length; i++) {
		if (!visited[i] && !dfs(nexts, i, visited, using, ret)) {
			return []
		}
	}
	return ret
};

function dfs(nexts, index, visited, using, ret) {
	if (using[index]) {
		return false
	}
	if (visited[index]) {
		return true
	}
	visited[index] = true

	using[index] = true
	for (let i = 0; i < nexts[index].length; i++) {
		if (!dfs(nexts, nexts[index][i], visited, using, ret)) {
			return false
		}
	}
	using[index] = false
	ret.push(index)
	return true
}

console.log(findOrder(2, [[1,0]]))