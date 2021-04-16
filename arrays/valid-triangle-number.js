var triangleNumber = function(nums) {
    if (nums.length < 3) return 0
    nums.sort((a,b) => a-b)
    let count = 0
    for (let i = nums.length - 1; i >= 2; i--) {
        const leg1 = nums[i]
        for (let j = 0; j < i-1; j++) {
            const leg2 = nums[j]
            for (let k = j+1; k < i; k++) {
                const leg3 = nums[k]
                if (leg1 < leg2+leg3) {
                    count += i-k
                    break
                }
            }
        }
    }
    return count
};