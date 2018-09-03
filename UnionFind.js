class UnionFind {
	constructor(sum) {
		this.uf = new Array(sum).fill(undefined).map((_, i) => i)
	}
	find(p) {
		if (this.uf[p] === p) {
			return p
		}
		return this.uf[p] = this.find(this.uf[p])
	}
	union(p, q) {
		const root1 = this.find(p)
		const root2 = this.find(q)
		if (root1 !== root2) {
			this.uf[Math.max(root1, root2)] = Math.min(root1, root2)
		}
	}
	group() {
		const set = new Set()
		for (let i = 0; i < this.uf.length; i++) {
			set.add(this.find(i))
		}
		return set.size
	}
}

var a = new UnionFind(10)
a.union(0, 3)
a.union(0, 5)
a.union(1, 6)
a.union(2, 6)
a.union(7, 8)
a.union(6, 9)
a.union(8, 9)
a.union(4, 8)
// a.union(5, 9)

console.log(a)
