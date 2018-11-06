var data = [1,2,2,3,1]

function prefixLi(deep) {
	return `<li deep="${deep}">`
}

function genBank(pad) {
	return new Array(pad).fill(' ').join(' ')
}

function transform(data) {
	if (!data.length) {
		return ''
	}
	const ret = [prefixLi(data[0])]
	for (let i = 1, pad = 2; i < data.length; i++, pad += 2) {
		if (data[i] <= data[i - 1]) {
			pad -= 2
			ret.push('</li>')
			ret.push(...new Array(data[i - 1] - data[i]).fill(undefined).map(() => {
				pad -= 2
				return `\n${genBank(pad)}</li>`
			}))
		}
		ret.push(`\n${genBank(pad)}${prefixLi(data[i])}`)
	}
	ret.push('</li>')
	return ret.join('')
}

transform(data)
