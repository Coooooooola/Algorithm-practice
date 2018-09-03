var shortestPalindrome = function(s) {
	if (s.length <= 1) {
		return s
	} else if (s.length === 2) {
		return s[0] === s[1] ? s : s + s[0]
	}
	const first = s[0]
	const last = s[s.length - 1]
	if (first === last) {
		return first + shortestPalindrome(s.slice(1, s.length - 1)) + last
	}
	const s1 = last + shortestPalindrome(s.slice(0, s.length - 1)) + last
	const s2 = first + shortestPalindrome(s.slice(1)) + first
	return s1.length <= s2.length ? s1 : s2
};