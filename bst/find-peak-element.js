var findPeakElement = function(nums) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor((r+l)/2)
        let el1 = nums[mid]
        let el2 = mid === 0 ? -Infinity : nums[mid-1]
        let el3 = mid === nums.length - 1 ? -Infinity : nums[mid+1]
        if (el1 > el2 && el1 > el3) return mid
        else if (el2 > el1) r = mid - 1
        else l = mid + 1
    }
};