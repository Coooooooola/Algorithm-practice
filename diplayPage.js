function displayPage(resultsPerPage, results) {
	results = results.map(el => ({hostId: el.split(',')[0], el})).reverse()
	const ret = []
	while (results.length) {
		const page = [], rest = []
		const set = new Set()
		
		for (let i = 0; i < resultsPerPage && (results.length > 0 || rest.length > 0); ) {
			if (results.length === 0) {
				page.push(rest.pop().el)
				i++
				continue
			}
			const {hostId, el} = results.pop()
			if (set.has(hostId)) {
				rest.unshift({hostId, el})
				continue
			}
			set.add(hostId)
			page.push(el)
			i++
		}
		ret.push(...page, '')
		results.push(...rest)
	}
	ret.pop()
	return ret
}

const results = [
	"1,28,300.6,San Francisco",
	"4,5,209.1,San Francisco",
	"20,7,203.4,Oakland",
	"6,8,202.9,San Francisco",
	"6,10,199.8,San Francisco",
	"1,16,190.5,San Francisco",
	"6,29,185.3,San Francisco",
	"7,20,180.0,Oakland",
	"6,21,162.2,San Francisco",
	"2,18,161.7,San Jose",
	"2,30,149.8,San Jose",
	"3,76,146.7,San Francisco",
	"2,14,141.8,San Jose"
	// "1,28,300.1,SanFrancisco",
	// "4,5,209.1,SanFrancisco",
	// "20,7,208.1,SanFrancisco",
	// "23,8,207.1,SanFrancisco",
	// "16,10,206.1,Oakland",
	// "1,16,205.1,SanFrancisco",
	// "6,29,204.1,SanFrancisco",
	// "7,20,203.1,SanFrancisco",
	// "8,21,202.1,SanFrancisco",
	// "2,18,201.1,SanFrancisco",
	// "2,30,200.1,SanFrancisco",
	// "15,27,109.1,Oakland",
	// "10,13,108.1,Oakland",
	// "11,26,107.1,Oakland",
	// "12,9,106.1,Oakland",
	// "13,1,105.1,Oakland",
	// "22,17,104.1,Oakland",
	// "1,2,103.1,Oakland",
	// "28,24,102.1,Oakland",
	// "18,14,11.1,SanJose",
	// "6,25,10.1,Oakland",
	// "19,15,9.1,SanJose",
	// "3,19,8.1,SanJose",
	// "3,11,7.1,Oakland",
	// "27,12,6.1,Oakland",
	// "1,3,5.1,Oakland",
	// "25,4,4.1,SanJose",
	// "5,6,3.1,SanJose",
	// "29,22,2.1,SanJose",
	// "30,23,1.1,SanJose"
]

// displayPage(5, results)



function paginate(resultsPerPage, results) {
	results = results.map(el => ({id: +el.split(',')[0], el})).reverse()
	const ret = []
	while (results.length) {
		const rest = []
		const set = new Set()
		let i = 0
		while (i < resultsPerPage && results.length) {
			const element = results.pop()
			if (set.has(element.id)) {
				rest.push(element)
			} else {
				set.add(element.id)
				ret.push(element.el)
				i++
			}
		}
		ret.push(...rest.splice(resultsPerPage - i).map(({el}) => el), '')
		results.push(...rest.reverse())
	}
	ret.pop()
	return ret
}

paginate(5, results)
