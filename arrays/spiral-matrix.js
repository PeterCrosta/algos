var spiralOrder = function(matrix, output = []) {
    let res = []
    const removeTop = () => {
      if (!matrix.length) return
      res = [...res,...matrix[0]]
      matrix.shift()
    }
    const removeR = () => {
      if (!matrix.length) return
      let i = 0;
      while (i < matrix.length) {
        const row = matrix[i]
        res.push(row[row.length-1])
        row.pop()
        if (!row.length) matrix.shift()
        else i++
      }
    }
    const removeB = () => {
      if (!matrix.length) return
      let row = matrix[matrix.length-1]
      for (let i = row.length-1; i >= 0; i--) {
        res.push(row[i])
      }
      matrix.pop()
    }
    const removeL = () => {
      if (!matrix.length) return
      for (let i = matrix.length - 1; i >= 0; i--) {
        res.push(matrix[i][0])
        matrix[i].shift()
        if (!matrix[i].length) matrix.pop()
      }
    }
    while (matrix.length) {
      removeTop()
      removeR()
      removeB()
      removeL()
    }
    return res
  
  };