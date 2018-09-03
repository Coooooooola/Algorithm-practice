function kmp(string, pattern) {
	const dp = [0]
	for (let i = 1, inc = -1; i < pattern.length; i++) {
		inc = pattern[inc] === pattern[i - 1] ? inc + 1 : 0
		dp.push(inc)
	}
	console.log(dp)
	for (let i = 0, j = 0; i < string.length; ) {
		if (string[i] === pattern[j]) {
			i++
			j++

			if (j === pattern.length) {
				return i - pattern.length
			}
		} else if (j === 0) {
			i++
		} else {
			j = dp[j]
		}
	}
	return null
}

console.log(kmp('BBC ABCDAB ABCDABCDABCDABCDGE', 'ABCDABCDG'))



1231234123
1234123