function isSubsetSum(nums, sum) {
  const dp = new Array(nums.length + 1).fill(null).map(() => new Array(sum + 1).fill(false))
  dp[0][0] = true
  
  for (let i = 1; i < dp.length; i++) {
    const index = i - 1
    
    for (let j = 0; j < dp[i].length; j++) {
      if (dp[i - 1][j] || nums[index] === j || dp[i - 1][j - nums[index]]) {
        dp[i][j] = true
      }
    }
    if (dp[i][sum]) {
      const res = []
      let a = i, b = sum
      while (b !== 0) {
        while (dp[a - 1][b]) {
          a--
        }
        res.unshift(nums[a - 1])
        b -= nums[a - 1]
      }
      return res
    }
  }
  return false
}

console.log(isSubsetSum([2, 3, 5, 7, 8, 10], 20))


