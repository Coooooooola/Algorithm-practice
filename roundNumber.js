function roundNumbers(nums) {
	const sum = Math.round(nums.reduce((a, b) => a + b))
	const flooredNums = nums
		.map((val, index) => ({val, index}))
		.sort(({val: a}, {val: b}) => (b - Math.floor(b)) - (a - Math.floor(a)))
		.map(value => ({...value, val: Math.floor(value.val)}))
	const flooredSum = flooredNums.map(({val}) => val).reduce((a, b) => a + b)
	for (let i = 0; i < sum - flooredSum; i++) {
		flooredNums[i].val++
	}
	return flooredNums.sort(({index: a}, {index: b}) => a - b).map(({val}) => val)
}

console.log(roundNumbers([1.4, 0.3, 0.4]))