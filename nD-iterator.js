class Iterator {
	constructor(array, depth = Infinity) {
		this.array = array
		this.index = -1
		this.depth = depth
		this.childIteraotr = null
		this._goNext()
	}
	_goNext() {
		let {array, index, depth} = this
		index += 1
		if (depth > 1) {
			for (; index < array.length && Array.isArray(array[index]); index++) {
				const it = new Iterator(array[index], depth - 1)
				if (it.hasNext()) {
					this.childIteraotr = it
					break
				}
			}
		}
		this.index = index
	}
	hasNext() {
		return this.index < this.array.length
	}
	next() {
		if (!this.hasNext()) {
			return {value: undefined, done: true}
		}
		const {array, index, childIteraotr, _goNext} = this
		if (childIteraotr) {
			const {value, done} = childIteraotr.next()
			if (done) {
				this.childIteraotr = null
				this._goNext()
			}
			return {value, done: !this.hasNext()}
		}
		const value = array[index]
		this._goNext()
		return {value, done: !this.hasNext()}
	}
	remove() {
		if (!this.hasNext()) {
			return undefined
		}
		const {array, index, childIteraotr} = this
		if (childIteraotr) {
			const ret = childIteraotr.remove()
			if (!childIteraotr.hasNext()) {
				this.childIteraotr = null
				this._goNext()
			}
			return ret
		}
		const ret = array.splice(index, 1)
		if (this.hasNext() && Array.isArray(array[index])) {
			this.index -= 1
			this._goNext()
		}
		return ret[0]
	}
}


var arr = [[-1, 0, [], ['a'], [], [], ['b']], undefined, [1,2,3], [], [4,5], null, [6], [7, [8, [9, [10, 11]]]], null]

var it = new Iterator(arr, 3)

console.log(it.remove())
console.log(it.remove())
console.log(it.remove())

while (it.hasNext()) {
	console.log('remove', it.remove())
	console.log(it.next())
}
