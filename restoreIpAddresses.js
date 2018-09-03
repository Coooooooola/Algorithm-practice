var restoreIpAddresses = function(s) {
	const ret = []
	recursive(s, [], ret)
	return ret.map(ip => ip.join('.'))
};

function recursive(s, subset, list) {
	if (subset.length === 4) {
		if (s.length === 0) {
			list.push(subset.slice())
		}
		return
	}
	const minLen = s.length - (3 - subset.length) * 3
	for (let i = Math.max(1, minLen), len = Math.min(3, s.length); i <= len; i++) {
		const str = s.substr(0, i)
		if (str.length >= 2 && str[0] === '0') {
			break
		}
		const digit = str
		if (digit <= 255) {
			subset.push(digit)
			recursive(s.slice(i), subset, list)
			subset.pop()
		}
	}
}

var s = '010010'
restoreIpAddresses(s)