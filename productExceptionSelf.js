var productExceptSelf = function(nums) {
	const ret = new Array(nums.length).fill(1)
	for (let i = 1; i < nums.length; i++) {
		ret[i] = ret[i - 1] * nums[i - 1]
	}
	for (let i = nums.length - 1, right = 1; i >= 0; i--) {
		ret[i] *= right
		right *= nums[i]
	}
	return ret
};

var nums = [1,2,3,4]

productExceptSelf(nums)