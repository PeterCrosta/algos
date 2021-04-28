var pivotIndex = function(nums) {
    let lSum = 0, rSum = 0;
    for (let i = 1; i < nums.length; i++) rSum+=nums[i]
    if (!rSum) return 0
    for (let j = 1; j < nums.length; j++) {
        lSum+=nums[j-1]
        rSum-=nums[j]
        if (lSum === rSum) return j
    }
    return -1
};