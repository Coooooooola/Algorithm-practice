function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
	if (n === 0) {
		return []
	}
	const dp = new Array(n + 1).fill(undefined).map(() => [])
	dp[0].push(null)
	for (let i = 1; i <= n; i++) {
		for (let l = 0; l < i; l++) {
			const r = i - 1 - l
			dp[l].forEach(left => {
				dp[r].forEach(right => {
					const root = new TreeNode(l + 1)
					root.left = left
					root.right = cloneTree(right, l + 1)
					dp[i].push(root)
				})
			})
		}
	}
	return dp[n]
};

function cloneTree(root, offset) {
	if (!root) {
		return null
	}
	const ret = new TreeNode(root.val + offset)
	ret.left = cloneTree(root.left, offset)
	ret.right = cloneTree(root.right, offset)
	return ret
}