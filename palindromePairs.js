var palindromePairs = function(words) {
	const map = new Map()
	words.forEach((word, i) => {
		map.set(word.split('').reverse().join(''), i)
	})
	console.log(map)
	const ret = []
	words.forEach((word, index) => {
		if (map.has('') && map.get('') !== index && isPalindrome(word)) {
			ret.push([map.get(''), index])
		}
		for (let i = 0; i < word.length; i++) {
			const preWord = word.slice(0, i)
			const postWord = word.slice(i)
			console.log(preWord, postWord)

			if (map.has(preWord) && map.get(preWord) !== index && isPalindrome(postWord)) {
				ret.push([index, map.get(preWord)])
			}
			if (map.has(postWord) && map.get(postWord) !== index && isPalindrome(preWord)) {
				ret.push([map.get(postWord), index])
			}
		}
	})
	return ret
};

function isPalindrome(str) {
	for (let i = 0, j = str.length - 1; i < j; i++, j--) {
		if (str[i] !== str[j]) {
			return false
		}
	}
	return true
}

palindromePairs(["bat", "tab", "cat", "", "aba"])