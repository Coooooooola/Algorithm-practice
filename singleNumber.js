var singleNumber = function(nums) {
	let ret = 0
	nums.forEach(num => ret ^= num)
	return ret ^ 0
};

var nums = [2,2,1]
singleNumber(nums)