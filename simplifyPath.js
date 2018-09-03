var simplifyPath = function(path) {
	const dirs = []
	path.split('/').filter(dir => dir !== '' && dir !== '.').forEach(dir => {
		if (dir === '..') {
			dirs.pop()
		} else {
			dirs.push(dir)
		}
	})
	return '/' + dirs.join('/')
};

var path = '/home////foo/../abc/'
console.log(simplifyPath(path))