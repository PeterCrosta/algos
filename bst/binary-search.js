var search = function(nums, target) {
     let l = 0, r = nums.length - 1
  while (l <= r) {
    const p = Math.floor((l+r)/2)
    const el = nums[p]
    if (el === target) return p
    else if (el < target) l = p + 1
    else r = p - 1
  }
  return -1
};