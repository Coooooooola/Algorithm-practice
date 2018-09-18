class Iterator {
	constructor(array, depth = Infinity) {
		this.array = array
		this.index = -1
		this.depth = depth
		this.childIteraotr = null
		this._goNext()
	}
	_goNext() {
		let {array, index, depth, childIteraotr} = this
		if (childIteraotr && childIteraotr.hasNext()) {
			return
		}

		this.childIteraotr = null
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
		const value = childIteraotr ? childIteraotr.next().value : array[index]
		this._goNext()
		return {value, done: !this.hasNext()}
	}
	remove() {
		if (!this.hasNext()) {
			throw new Error('No next value for removing.')
		}
		let {array, index, childIteraotr} = this
		const ret = childIteraotr ? childIteraotr.remove() : array.splice(index, 1)[0]
		if (!childIteraotr && this.hasNext()) {
			this.index -= 1
		}
		this._goNext()
		return ret
	}
}


var arr = [[-1, 0, [], ['a'], [], [], ['b']], undefined, [1,2,3], [], [4,5], null, [6], [7, [8, [9, [10, 11]]]], null, 12]

var it = new Iterator(arr, 3)

console.log(it.remove())
console.log(it.remove())
console.log(it.remove())

while (it.hasNext()) {
	console.log('remove', it.remove())
	console.log(it.next())
}
