function alienDictionary(words) {
	const degrees = new Array(0xff).fill(0)
	const nexts = new Array(0xff).fill(undefined).map(() => new Set())
	for (let i = 1; i < words.length; i++) {
		const len = Math.min(words[i - 1].length, words[i].length)
		for (let j = 0; j < len; j++) {
			const outBound = words[i - 1][j].charCodeAt()
			const inBound = words[i][j].charCodeAt()
			if (outBound !== inBound) {
				nexts[outBound].add(inBound)
				degrees[inBound]++
				break
			}
		}
	}
	const zeros = []
	degrees.forEach((degree, index) => {
		if (degree === 0 && nexts[index].size > 0) {
			zeros.push(index)
		}
	})
	const ret = []
	while (zeros.length) {
		const edge = zeros.pop()
		ret.push(edge)
		for (const index of nexts[edge].values()) {
			degrees[index]--
			if (degrees[index] === 0) {
				zeros.push(index)
			}
		}
	}
	return ret.map(val => String.fromCharCode(val))
}

function print(nexts) {
	nexts.forEach((set, index) => {
		if (set.size === 0) {
			return
		}
		const res = []
		for (let next of set) {
			res.push(String.fromCharCode(next))
		}
		console.log(String.fromCharCode(index), ':', res)
	})
}

const arr = [
// "caa", "aaa", "aab"
// "baa", "abcd", "abca", "cab", "cad"

	// "kef",
	// "krt",
	// "kr",
	// "kft",
	// "rftt"

	"wrt",
	"wrf",
	"er",
	"ar",
	"ett",
	"rftt"

	// 'a','b','a'
]

const ret = alienDictionary(arr)
console.log(ret)