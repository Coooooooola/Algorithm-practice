function waterLand(terrian, pos, count) {
	const heights = terrian.slice()
	for (let i = 0; i < count; i++) {
		let index = pos
		let lazyIndex = index
		while (index - 1 >= 0 && heights[index - 1] <= heights[index]) {
			if (heights[index - 1] < heights[index]) {
				lazyIndex = index - 1
			}
			index--
		}
		if (heights[lazyIndex] === heights[pos]) {
			index = pos
			lazyIndex = index
			while (index + 1 < terrian.length && heights[index + 1] <= heights[index]) {
				if (heights[index + 1] < heights[index]) {
					lazyIndex = index + 1
				}
				index++
			}
		}
		heights[lazyIndex]++
	}
	return heights
}


console.log(waterLand([3,2,1,2], 1, 2))

// +++++
// ++++
// ++0
// +00
// ++0
// +++
// ++
// +
// 0
// +
// ++
// ++++