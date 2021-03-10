var productExceptSelf = function(nums) {
    let prod = 1
    let output = []
    let z = 0
    for (let n of nums) {
        if (n === 0) {
            z++
            continue
        }
        prod *= n
    }
    if (!z) {
        for (let n of nums) output.push(prod/n)
    } else if (z > 1) {
        output.length = nums.length
        output.fill(0)
        return output
    } else {
        output.length = nums.length
        output.fill(0)
        let i = nums.indexOf(0)
        output[i] = prod
    }
    return output
};