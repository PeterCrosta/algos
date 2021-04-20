// var nextGreaterElements = function(nums) {
//     const res = []
// for (let i = 0; i < nums.length; i++) {
//   const num1 = nums[i]
//   let j = i === nums.length - 1 ? 0 : i+1
//   while (j !== i) {
//     const num2 = nums[j]
//     if (num2 > num1) {
//       res.push(num2)
//       break
//       } else j = j === nums.length - 1 ? 0 : j+1
//   }
//   if (j === i) res.push(-1)
// }
// return res
// };

var nextGreaterElements = function(nums) {
    const res = [], stack = [];
    const search = () => {
        for (let i = nums.length - 1; i >= 0; i--) {
            const curr = nums[i]
            while (stack.length) {
                const comp = nums[stack[stack.length-1]]
                if (comp > curr) {
                    res[i] = comp
                    break
                } else stack.pop()
            }
            if (!stack.length) res[i] = -1
            stack.push(i)
        }
    }
    search()
    search()
    return res
};