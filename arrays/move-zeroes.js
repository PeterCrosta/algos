var moveZeroes = function(nums) {
    let i = 0, j = 0;
    while (j < nums.length) {
        if (nums[j]) {
            [nums[i],nums[j]] = [nums[j],nums[i]]
            i++
            j++
        } else j++
    }
};