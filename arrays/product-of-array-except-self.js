// var productExceptSelf = function(nums) {
//     let prod = 1
//     let output = []
//     let z = 0
//     for (let n of nums) {
//         if (n === 0) {
//             z++
//             continue
//         }
//         prod *= n
//     }
//     if (!z) {
//         for (let n of nums) output.push(prod/n)
//     } else if (z > 1) {
//         output.length = nums.length
//         output.fill(0)
//         return output
//     } else {
//         output.length = nums.length
//         output.fill(0)
//         let i = nums.indexOf(0)
//         output[i] = prod
//     }
//     return output
// };

var productExceptSelf = function(nums) {
    let prod = 1
    let zI;
    let z = 0
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]
        if (n === 0) {
            z++
            zI = i
            continue
        }
        prod *= n
    }
    if (!z) {
        for (let j = 0; j < nums.length; j++) nums[j] = prod/nums[j]
    } else if (z > 1) {
        nums.fill(0)
        return nums
    } else {
        nums.fill(0)
        nums[zI] = prod
    }
    return nums
};