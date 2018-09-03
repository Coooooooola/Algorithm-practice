var ladderLength = function(beginWord, endWord, wordList) {
	return bfs(beginWord, endWord, wordList)
};

function bfs(from, to, dict) {
	if (from === to) {
		return 0
	}

	let times = 0
	let nexts = [from]
	const used = dict.map(() => false)

	while (nexts.length) {
		times++
		const curr = nexts
		nexts = []

		console.log(curr, nexts)
		for (const word of curr) {
			for (let i = 0; i < dict.length; i++) {
				if (used[i]) {
					continue
				}
				if (compare(word, dict[i])) {
					used[i] = true
					if (dict[i] === to) {
						return times + 1
					}
					nexts.push(dict[i])
				}
			}
		}
	}
	return 0
}

function compare(s1, s2) {
	if (s1.length !== s2.length) {
		return false
	}
	for (let i = 0, diff = 0; i < s1.length; i++) {
		if (s1[i] !== s2[i]) {
			if (diff === 0) {
				diff = 1
			} else {
				return false
			}
		}
	}
	return true
}

var beginWord = "hit"
var endWord = "cog"
var wordList = ["hot","dot","dog","lot","log","cog"]

ladderLength(beginWord, endWord, wordList)