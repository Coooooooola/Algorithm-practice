var wordBreak = function(s, wordDict) {
	const set = new Set()
	wordDict.forEach(word => set.add(word))
	const dp = new Array(s.length + 1).fill(false)
	dp[0] = true
	const nexts = [0]
	for (let i = 1; i <= s.length; i++) {
		for (const index of nexts) {
			const substr = s.substring(index, i)
			if (set.has(substr)) {
				dp[i] = true
				nexts.push(i)
				break
			}
		}
	}
	return dp[dp.length - 1]
};


var s = 'applepenapple'
wordDict = ["apple", "pen"]
wordBreak(s, wordDict)