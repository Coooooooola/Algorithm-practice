function crossingTheBridge(nums) {
	if (nums.length === 0) {
		return 0
	}
	if (nums.length === 1) {
		return nums[0]
	}
	nums.sort((a, b) => a - b)
	const dp = new Array(nums.length).fill(0)
	dp[0] = nums[0]
	dp[1] = nums[1]
	for (let i = 2; i < dp.length; i++) {
		dp[i] = Math.min(dp[i - 1] + nums[0] + nums[i], dp[i - 2] + nums[0] + nums[i] + nums[1] * 2)
	}
	console.log(dp)
	return dp[dp.length - 1]
}

var nums = [1, 2, 5, 10]
crossingTheBridge(nums)