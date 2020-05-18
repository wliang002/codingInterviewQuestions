/**
 * Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
    2
   / \
  1   3

Input: [2,1,3]
Output: true
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 *
 */
var isValidBST = function (root) {
  return checkNode(root, null, null)
}
// helper method: node is upper limit for left tree
// node.val is lower limit for right tree
function checkNode (node, min, max) {
  // dont use ! because of 0
  // base case
  if (node === null) {
    return true
  }
  // min !== null -> only check right tree
  // for right tree, all node.val should be larger than min
  if (min !== null && node.val <= min) {
    return false
  }
  // for left tree, all should be less than max
  if (max !== null && node.val >= max) {
    return false
  }

  // check right tree, min is root, no max
  if (!checkNode(node.right, node.val, max)) {
    return false
  }
  // check left tree, max is root, no min
  if (!checkNode(node.left, min, node.val)) {
    return false
  }
  return true
}
