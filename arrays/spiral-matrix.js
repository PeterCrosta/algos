// var spiralOrder = function(matrix, output = []) {
//     let res = []
//     const removeTop = () => {
//       if (!matrix.length) return
//       res = [...res,...matrix[0]]
//       matrix.shift()
//     }
//     const removeR = () => {
//       if (!matrix.length) return
//       let i = 0;
//       while (i < matrix.length) {
//         const row = matrix[i]
//         res.push(row[row.length-1])
//         row.pop()
//         if (!row.length) matrix.shift()
//         else i++
//       }
//     }
//     const removeB = () => {
//       if (!matrix.length) return
//       let row = matrix[matrix.length-1]
//       for (let i = row.length-1; i >= 0; i--) {
//         res.push(row[i])
//       }
//       matrix.pop()
//     }
//     const removeL = () => {
//       if (!matrix.length) return
//       for (let i = matrix.length - 1; i >= 0; i--) {
//         res.push(matrix[i][0])
//         matrix[i].shift()
//         if (!matrix[i].length) matrix.pop()
//       }
//     }
//     while (matrix.length) {
//       removeTop()
//       removeR()
//       removeB()
//       removeL()
//     }
//     return res
  
//   };

var spiralOrder = function(matrix) {
    let res = [], l = 0, t = 0, r = matrix[0].length-1, b = matrix.length - 1, i;
    const removeT = (idx) => {
      for (i = l; i <= r; i++) res.push(matrix[idx][i])
        t++
    }
    const removeR = (idx) => {
      for (i = t; i <= b; i++) {
          const row = matrix[i]
          res.push(row[idx])
      }
        r--
    }
    const removeB = (idx) => {
      let row = matrix[idx]
      for (i = r; i >= l; i--) {
        res.push(row[i])
      }
        b--
    }
    const removeL = (idx) => {
      for (i = b; i >= t; i--) {
        res.push(matrix[i][idx])
      }
        l++
    }
    let j = 0;
    while (l<=r && t<=b) {
      if (j % 4 === 0) removeT(t)
      if (j % 4 === 1) removeR(r)
      if (j % 4 === 2) removeB(b)
      if (j % 4 === 3) removeL(l)
        j++
    }
    return res
  
  };