function dijkstra(mtx, from, to) {
	const mins = mtx.map(() => Infinity)
	mins[from] = 0
	const nexts = new Set()
	nexts.add(from)
	while (nexts.size) {
		let minIndex = -1, minValue = Infinity
		for (const index of nexts.values()) {
			if (mins[index] < minValue) {
				minIndex = index
				minValue = mins[index]
			}
		}
		if (minIndex === to) {
			break
		}
		mtx[minIndex].forEach((val, i) => {
			if (val > 0) {
				const sum = val + mins[minIndex]
				if (sum < mins[i]) {
					mins[i] = sum
					nexts.add(i)
				}
			}
		})
		nexts.delete(minIndex)
	}
	return mins[to]
}

const mtx = [
	[0,2,1,0,0,0,0,0],
	[0,0,0,7,3,0,0,0],
	[0,0,0,0,5,0,0,0],
	[0,0,0,0,0,9,1,0],
	[0,1,0,2,0,15,0,18],
	[0,0,0,0,0,0,0,2],
	[0,0,0,0,0,0,0,20],
	[0,0,0,0,0,0,0,0]
]

console.log(dijkstra(mtx, 0, 7))