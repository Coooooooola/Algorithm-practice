// 仅适用于 无环图
function topological1(mtx) {
	const nexts = mtx.map(() => [])
	const degrees = mtx.map(() => 0)
	mtx.forEach((arr, i) => arr.forEach((val, j) => {
		if (val > 0) {
			nexts[i].push(j)
			degrees[j]++
		}
	}))

	const zeroInNodes = []
	degrees.forEach((degree, i) => degree === 0 && zeroInNodes.push(i))

	const ret = []
	while (zeroInNodes.length) {
		const node = zeroInNodes.pop()
		ret.push(node)
		nexts[node].forEach(next => {
			degrees[next]--
			if (degrees[next] === 0) {
				zeroInNodes.push(next)
			}
		})
	}
	return ret
}

// 自动检测是否有环
function topological2(mtx) {
	const nexts = mtx.map(() => [])
 	mtx.forEach((_, i) => _.forEach((val, j) => val > 0 && nexts[i].push(j)))
 	
 	const visited = mtx.map(() => false)
 	const visiting = mtx.map(() => false)
 	const ret = []
 	
 	for (let i = 0; i < mtx.length; i++) {
 		if (!visited[i]) {
			const res = dfs(nexts, visited, visiting, i)
			if (res) {
				ret.push(...res)
			}
 		}
 	}
 	return ret
}
function dfs(nexts, visited, visiting, node) {
	if (visiting[node]) {
		return false
	}
	visiting[node] = true
	visited[node] = true
	const ret = [node]
	for (const next of nexts[node]) {
		const res = dfs(nexts, visited, visiting, next)
		if (!res) {
			return false
		}
		ret.push(...res)
	}
	visiting[node] = false
	return ret
}

function main() {
	const graphMatrix = [
		[0, 1, 0, 0, 0, 0, 0],		// 0
		[0, 0, 1, 0, 0, 0, 0],		// 1
		[0, 0, 0, 0, 1, 0, 0],		// 2
		[1, 0, 0, 0, 0, 0, 0],		// 3
		[0, 0, 0, 1, 0, 0, 0],		// 4
		[0, 0, 1, 0, 0, 0, 0],		// 5
		[0, 0, 0, 0, 0, 0, 0],		// 6
	]
	console.log(topological1(graphMatrix))
	console.log(topological2(graphMatrix))
}

main()