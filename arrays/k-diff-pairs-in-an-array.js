var findPairs = function(nums, k) {
    const set = new Set(nums)
    const pairs = new Set()
    if (!k) {
        for (let n of nums) {
            if (set.has(n)) set.delete(n)
            else pairs.add(n)
        }
        return pairs.size
    }
    set.forEach(n => {
        const l = (k-n)*-1
        if (set.has(l)) {
            let h = Math.max(l,n)
            let low = Math.min(l,n)
            pairs.add(`${h}x${low}`)
        }
    })

    return pairs.size
};

// var findPairs = function(nums, k) {
//     const pairs = new Set()
//     for (let i = 0; i < nums.length - 1; i++) {
//         const n1 = nums[i]
//         for (let j = i+1; j < nums.length; j++) {
//             const n2 = nums[j]
//             const diff = Math.abs(n1-n2);
//             if (diff === k) {
//                 const arr = [n1,n2]
//                 arr.sort((a,b) => a-b)
//                 pairs.add(`${arr[0]}x${arr[1]}`)
//             }
//         }
//     }
//     return pairs.size