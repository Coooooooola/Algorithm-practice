var wordBreak = function(s, wordDict) {
	const set = new Set()
	wordDict.forEach(word => set.add(word))
	const dp = new Array(s.length + 1)
	dp[0] = true
	const nexts = [0]
	const direction = {}
	for (let i = 1; i <= s.length; i++) {
		for (let j = 0, len = nexts.length; j < len; j++) {
			const substr = s.substring(nexts[j], i)
			if (set.has(substr)) {
				dp[i] = true
				nexts.push(i)
				if (!direction[i]) {
					direction[i] = new Set()
				}
				direction[i].add(nexts[j])
			}
		}
	}
	const pathes = []
	buildPath(direction, s.length, [], pathes)
	const ret = []
	for (const path of pathes) {
		const words = []
		for (let i = 0; i < path.length - 1; i++) {
			words.push(s.substring(path[i], path[i + 1]))
		}
		ret.push(words.join(' '))
	}
	return ret
};

function buildPath(direction, curr, path, pathes) {
	if (!direction[curr]) {
		if (path.length > 0) {
			const copied = path.slice()
			copied.push(0)
			pathes.push(copied.reverse())
		}
		return
	}
	path.push(curr)
	for (const prev of direction[curr]) {
		buildPath(direction, prev, path, pathes)
	}
	path.pop()
}

var s = "a"
var wordDict = ["a"]

// var s = 'catsanddog'
// var wordDict = ["cat", "cats", "and", "sand", "dog"]

wordBreak(s, wordDict)