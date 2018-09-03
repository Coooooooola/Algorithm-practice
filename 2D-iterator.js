class iterator {
	constructor(arr) {
		this.arr = arr
		this.row = this._gotoNextRow(arr, 0)
		this.col = 0
	}
	_gotoNextRow(arr, row) {
		while (row < arr.length && (!(arr[row] instanceof Array) || arr[row].length === 0)) {
			row++
		}
		return row
	}
	hasNext() {
		const {row, col, arr} = this
		return arr[row] && col < arr[row].length
	}
	next() {
		if (!this.hasNext()) {
			throw new Error('no next value.')
		}
		const {arr, row, col} = this
		const ret = arr[row][col]
		if (col + 1 === arr[row].length) {
			this.row = this._gotoNextRow(arr, row + 1)
			this.col = 0
		} else {
			this.col += 1
		}
		return ret
	}
	remove() {
		const {arr, row, col} = this
		if (col - 1 >= 0) {
			const ret = arr[row].splice(col - 1, 1)[0]
			this.col--
			return ret
		} else {
			let prevRow = row - 1
			while (prevRow >= 0 && (!(arr[prevRow] instanceof Array) || arr[prevRow].length === 0)) {
				prevRow--
			}
			if (!arr[prevRow]) {
				throw new Error('no previous value.')
			} else {
				const ret = arr[prevRow].splice(arr[prevRow].length - 1, 1)[0]
				return ret
			}
		}
	}
}

var arr = [undefined, [1,2,3], [], [4,5], null, [6], null]

var it = new iterator(arr)

while (it.hasNext()) {
	console.log(it.next())
	console.log(it.remove())
}
console.log(arr)