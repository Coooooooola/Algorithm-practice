var minWindow = function(s, t) {
	const map = {}
	const count = {}
	t.split('').forEach(c => {
		if (!(c in map)) {
			map[c] = 0
			count[c] = 0
		}
		map[c]++
	})
	count.rest = t.length
	const ret = {s: 0, e: Infinity, len: Infinity}
	for (let i = 0, j = 0; j <= s.length; ) {
		if (count.rest > 0) {
			const c = s[j]
			if (c in map) {
				count[c]++
				if (count[c] <= map[c]) {
					count.rest--
				}
			}
			j++
		} else {
			if (ret.len > j - i) {
				ret.s = i
				ret.e = j
				ret.len = j - i
			}
			const c = s[i]
			if (c in map) {
				count[c]--
				if (count[c] < map[c]) {
					count.rest++
				}
			}
			i++
		}
		console.log(map, count, i, j)
	}
	return ret.len === Infinity ? '' : s.slice(ret.s, ret.e)
};

var s = 'aa'
var t = 'aa'

minWindow(s, t)