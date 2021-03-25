var compress = function(chars) {
let stack = [];
  const count = start => {
    let count = 0;
    for (let i = start; i >= 0; i--) {
      let char = chars[i]
      if (char === chars[start]) count++
      else break
    }
    return count
  }
  const pushN = n => {
    let strN = `${n}`
    for (let j = strN.length - 1; j >=0; j--)  {
      let curr = strN[j]
      stack.push(curr)
    }
  }
  let k = chars.length - 1
  while (k >= 0) {
    let curr = chars[k]
    let num = count(k)
    if (num === 1) {
      stack.push(curr)
      k--
    } else {
      pushN(num)
      stack.push(curr)
      k -= num
    }
  }
  while (chars.length) chars.pop()
  while (stack.length) chars.push(stack.pop())
};