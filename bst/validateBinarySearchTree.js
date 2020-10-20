var isValidBST = function(root, uL = Infinity, lL = -Infinity) {
    if (!root) return true
    if (root.val >= uL || root.val <= lL) return false
    return isValidBST(root.left, root.val, lL) && isValidBST(root.right, uL, root.val)
};