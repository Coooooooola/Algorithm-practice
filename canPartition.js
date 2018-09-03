var canPartition = function(nums) {
    const sum = nums.reduce((a, b) => a + b, 0)
    if (sum % 2 !== 0) {
        return false
    }
    const dp = new Array(sum + 1).fill(false)
    dp[0] = true
    const next = [0]
    for (let i = 0; i < nums.length; i++) {
        const len = next.length
        for (let j = 0; j < len; j++) {
            const index = nums[i] + next[j]
            if (!dp[index]) {
                next.push(index)
                dp[index] = true
            }
        }
        if (dp[sum / 2]) {
            return true
        }
    }
    return false
};
var nums = [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100]
console.log(canPartition(nums))
