var data = [1,2,2,3,1]

function prefixLi(deep) {
	return `<li deep="${deep}">`
}

function transform(data) {
	if (!data.length) {
		return ''
	}
	const ret = [prefixLi(data[0])]
	for (let i = 1; i < data.length; i++) {
		if (data[i] <= data[i - 1]) {
			ret.push(...new Array(data[i - 1] - data[i] + 1).fill('</li>'))
		}
		ret.push(prefixLi(data[i]))
	}
	ret.push('</li>')
	return ret.join('')
}

transform(data)
