var averageOfLevels = function(root) {
    let rows = [[root]]
    let avgs = []
    const findAvg = arr => {
      let total = 0
      for (let node of arr) total += node.val
      avgs.push(total/arr.length)
    }
    const nextRow = arr => {
      let row = []
      for (let node of arr) {
        if (node.left) row.push(node.left)
        if (node.right) row.push(node.right)
      }
      if (row.length) rows.push(row)
    }
  let idx = 0
  while (idx < rows.length) {
    nextRow(rows[idx])
    findAvg(rows[idx])
    idx++
  }
  return avgs
};