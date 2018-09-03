function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var buildTree = function(preorder, inorder) {
	const map = new Map()
	inorder.forEach((val, i) => map.set(val, i))
	return recursive(preorder, map, 0, inorder.length)
};

function recursive(preorder, map, start, end) {
	if (preorder.length === 0) {
		return null
	}
	const pivot = map.get(preorder[0])
	if (start >= end || pivot < start || pivot >= end) {
		return null
	}
	const node = new TreeNode(preorder.shift())
	node.left = recursive(preorder, map, start, pivot)
	node.right = recursive(preorder, map, pivot + 1, end)
	return node
}

var preorder = [3,9,20,15,7]
var inorder = [9,3,15,20,7]

var root = buildTree(preorder, inorder)
console.log(root)