class BinaryIndexedTree {
	constructor(array) {
		const {_lowbit} = this
		const _biTree = [0].concat(array)
		for (let i = 1; i < _biTree.length; i++) {
			const nextIndex = i + _lowbit(i)
			if (nextIndex < _biTree.length) {
				_biTree[nextIndex] += _biTree[i]
			}
		}
		this._array = array
		this._biTree = _biTree
	}
	_lowbit(x) {
		return x & -x
	}
	sum(end) {
		const {_biTree, _lowbit} = this
		let ret = 0
		for (let i = Math.min(end + 1, _biTree.length - 1); i >= 1; i -= _lowbit(i)) {
			ret += _biTree[i]
		}
		return ret
	}
	subSum(start, end) {
		return this.sum(end) - this.sum(start - 1)
	}
	update(index, value) {
		if (index >= this._array.length) {
			throw new Error('index overflow.')
		}
		const {_biTree, _array, _lowbit} = this
		const difference = value - _array[index]
		_array[index] = value
		for (let i = index + 1; i < _biTree.length; i += _lowbit(i)) {
			_biTree[i] += difference
		}
	}
}




var a = new BinaryIndexedTree(new Array(65).fill(1))
a.toString()
for (let i = 1; i <= 70; i++) {
	console.log(a.sum(i))
}
a.update(17, 2)
console.log(a.subSum(12, 30))
console.log(a.subSum(17, 45))



["NumArray","sumRange","update","sumRange","sumRange","update","update","sumRange","sumRange","update","update"]
[[[-28,-39,53,65,11,-56,-65,-39,-43,97]],[5,6],[9,27],[2,3],[6,7],[1,-82],[3,-72],[3,7],[1,8],[5,13],[4,-67]]