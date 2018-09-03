function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

var buildTree = function(inorder, postorder) {
	const map = new Map()
	inorder.forEach((val, i) => map.set(val, i))
	return recursive(postorder, map, 0, inorder.length)
};

function recursive(postorder, map, start, end) {
	if (postorder.length === 0) {
		return null
	}
	const index = map.get(postorder[postorder.length - 1])
	if (index < start || index >= end) {
		return null
	}
	const node = new TreeNode(postorder.pop())
	node.right = recursive(postorder, map, index + 1, end)
	node.left = recursive(postorder, map, start, index)
	return node
}