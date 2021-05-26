var minimumTotal = function(triangle) {
    if (triangle.length === 1) return triangle[0][0]
    for (let j = 1; j < triangle.length; j++) {
      let pRow = triangle[j-1]
      let row = triangle[j]
      for (let i = 0; i < row.length; i++) {
        const n1 = pRow[i-1] === undefined ? Infinity : pRow[i-1], n2 = pRow[i] === undefined ? Infinity : pRow[i], n3 = row[i]
        row[i] = Math.min(n1+n3,n2+n3)
      }
    }
    return Math.min(...triangle[triangle.length - 1])
};