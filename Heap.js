const Int = parseInt

class Heap {
	constructor() {
		this.heap = []
	}
	insert(value) {
		this.heap.push(value)
		for (let i = this.heap.length - 1, j = Int((i - 1) / 2); i > 0 && this.heap[i] < this.heap[j]; i = j, j = Int((j - 1) / 2)) {
			const tp = this.heap[i]
			this.heap[i] = this.heap[j]
			this.heap[j] = tp
		}
	}
	get() {
		return this.heap[0]
	}
	delete() {
		if (this.heap.length === 0) {
			return
		}
		this.heap[0] = this.heap.pop()
		for (let i = 0, leaf1 = 1, leaf2 = 2; leaf1 < this.heap.length; leaf1 = i * 2 + 1, leaf2 = leaf1 + 1) {
			const nextLeaf = leaf2 >= this.heap.length ? leaf1
				: (this.heap[leaf1] <= this.heap[leaf2] ? leaf1 : leaf2)
			if (this.heap[i] <= this.heap[nextLeaf]) {
				break
			}

			const tp = this.heap[i]
			this.heap[i] = this.heap[nextLeaf]
			this.heap[nextLeaf] = tp

			i = nextLeaf
		}
	}
}

var a = new Heap()
a.insert(1)
a.insert(3)
a.insert(5)
a.insert(7)
a.insert(9)
a.insert(6)
a.insert(8)
a.insert(10)
a.insert(2)



