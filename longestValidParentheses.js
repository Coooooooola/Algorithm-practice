var longestValidParentheses = function(s) {
	let ret = 0
	const stack = [0]
	s.split('').forEach(c => {
		if (c === '(') {
			stack.push(0)
		} else {
			const len = stack.length
			if (len >= 2) {
				stack[len - 2] += stack.pop() + 2
				ret = Math.max(ret, stack[len - 2])
			} else if (len === 1) {
				stack[0] = 0
			} else {
				throw new Error('wouldn\'t happen')
			}
		}
	})
	return ret
};

var s = '()(()'
longestValidParentheses(s)