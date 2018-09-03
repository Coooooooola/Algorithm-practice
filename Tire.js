class Tire {
	add(word) {
		let next = this
		word.split('').forEach(c => {
			if (!(c in next)) {
				next[c] = {}
			}
			next = next[c]
		})
		next[''] = '$'
	}
	has(word) {
		let next = this
		for (let i = 0; i < word.length; i++) {
			if (!(word[i] in next)) {
				return false
			} else {
				next = next[word[i]]
			}
		}
		return '' in next
	}
	remove(word) {
		let next = this
		for (let i = 0; i < word.length; i++) {
			if (!(word[i] in next)) {
				return
			} else {
				next = next[word[i]]
			}
		}
		delete next['']
	}
	suffix(word) {
		for (let i = 0; i < word.length; i++) {
			this.add(word.slice(i))
		}
	}
}

var a = new Tire()
a.add('hell')
a.add('hello')
a.add('her')
a.add('yea')
a.add('yes')
a.add('yeah')
