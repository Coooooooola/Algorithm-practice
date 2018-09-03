const canAttendMeetings = function (intervals) {
	intervals.sort(([s1], [s2]) => s1 - s2)
	let last = -Infinity
	for (const [start, end] of intervals) {
		if (start < last) {
			return false
		}
		last = end
	}
	return true
}

console.log(canAttendMeetings([[5,8], [6,8]]))