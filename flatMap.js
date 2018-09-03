Array.prototype.flatMap = function (depth = Infinity) {
	return depth <= 0
		? this.slice()
		: this.reduce((a, b) => a.concat(b instanceof Array ? b.flatMap(depth - 1) : b), [])
}

function deepClone(target, map = new Map()) {
	if (target == null || typeof target !== 'object') {
		return target
	}
	const ret = Array.isArray(target) ? [] : Object.assign({}, target)
	map.set(target, ret)
	if (Array.isArray(ret)) {
		target.forEach(val => {
			ret.push(map.get(val) || deepClone(val, map))
		})
	} else {
		Object.keys(ret)
			.filter(key => typeof target[key] === 'object')
			.forEach(key => {
				ret[key] = map.get(target[key]) || deepClone(target[key], map)
			})
	}
	return ret
}
var a = {val: null, arr: [1,2,4,3,2]}
var b = {cool: 'yes'}
a.objs = [a, b, 'hi', 54]
a.b = b
b.a = a
var c = deepClone(a)
c.b.test = 'test1'
c.b.a.coool = 'cooool'

function findAncester(root, node1, node2) {
	if (!root || root === node1 || root === node2) {
		return root
	}
	const left = findAncester(root.left, node1, node2)
	const right = findAncester(root.right, node1, node2)
	if (left && right) {
		return root
	} else {
		return left || right
	}
}

var node1 = {left: {left: null, right: null}, right: null}
var node2 = {left: {left: null, right: null}, right: {left: {left: null, right: null}, right: null}}
var root = {left: {left: null, right: {val: 123, left: node1, right: {left: null, right: node2}}}, right: null}

findAncester(root, node1, node2)