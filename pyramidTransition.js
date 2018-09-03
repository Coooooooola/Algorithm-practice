var pyramidTransition = function(bottom, allowed) {
	const map = {}
	allowed.forEach(triple => {
		const pre = triple.substr(0, 2)
		if (map[pre]) {
			map[pre].push(triple[2])
		} else {
			map[pre] = [triple[2]]
		}
	})
	return backtrack(bottom.split(''), 0, map)
};

function backtrack(row, index, map) {
	if (row.length <= 1) {
		return true
	}
	const pre = row.slice(index, index + 2).join('')
	if (map[pre]) {
		for (const newChar of map[pre]) {
			row[index] = newChar
			if (index === row.length - 2) {
				const newRow = row.slice(0, row.length - 1)
				if (backtrack(newRow, 0, map)) {
					return true
				}
			} else {
				if (backtrack(row, index + 1, map)) {
					return true
				}
			}
		}
	}
	return false
}

// const bottom = 'XYZ'
// const allowed = ["XYD", "YZE", "DEA", "FFF"]
const bottom = 'XXYX'
const allowed = ["XXX", "XXY", "XYX", "XYY", "YXZ"]

console.log(pyramidTransition(bottom, allowed))