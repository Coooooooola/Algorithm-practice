function minMeetingRooms1(intervals) {
	const [min, max] = intervals.reduce(([s1, e1], [s2, e2]) => [Math.min(s1, s2), Math.max(e1, e2)])
	intervals = intervals.map(([s, e]) => [s - min, e - min])
	const len = max - min + 1
	const startArr = new Array(len).fill(null)
	const endArr = new Array(len).fill(null)

	intervals.forEach(([s, e], index) => {
		startArr[s] = index
		endArr[e] = index
	})

	let ret = 0
	let rooms = 0
	for (let i = 0; i < len; i++) {
		if (endArr[i] !== null) {
			rooms--
		}
		if (startArr[i] !== null) {
			rooms++
			ret = Math.max(ret, rooms)
		}
	}
	return ret
}

console.log(minMeetingRooms1([[0,30],[5,10],[15,20]]))

function minMeetingRooms2(intervals) {
	if (intervals.length <= 1) {
		return 0
	}
	const flatenIntervals = intervals
		.reduce((a, b) => a.concat([{type: 'start', val: b[0]}, {type: 'end', val: b[1]}]), [])
	flatenIntervals.sort(({val: v1, type: t1}, {val: v2, type: t2}) => {
		if (v1 !== v2) {
			return v1 - v2
		}
		if (t1 === 'end') {
			return -1
		}
		return 1
	})
	console.log(flatenIntervals)
	let sum = 0
	let ret = 0
	for (const {type} of flatenIntervals) {
		if (type === 'start') {
			sum++
			ret = Math.max(ret, sum)
		} else {
			sum--
		}
	}
	return ret
}


console.log(minMeetingRooms2([[0,30],[15,20],[5,15]]))
