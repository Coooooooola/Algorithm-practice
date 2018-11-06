var data = [1,2,2,3,1]

function prefixLi(deep) {
	return `<li deep="${deep}">`
}

function transform(data) {
	if (!data.length) {
		return ''
	}
	const ret = []
	for (let i = 0, pad = 0; i < data.length; i++, pad += 2) {
		if (i > 0 && data[i] <= data[i - 1]) {
			ret.push('</li>')
			pad -= 2
			ret.push(...new Array(data[i - 1] - data[i]).fill(undefined).map(() => {
				pad -= 2
				return '\n' + (new Array(pad).fill('  ').join('')) + '</li>'
			}))
		}
		if (i > 0) {
			ret.push('\n' + (new Array(pad).fill('  ').join('')))
		}
		ret.push(prefixLi(data[i]))
	}
	ret.push('</li>')
	return '\n' + ret.join('') + '\n'
}

transform(data)
