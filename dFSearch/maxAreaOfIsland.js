/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = 0;
    let curr = 0;
    let set = new Set();
    const counter = (row, col) => {
        if (set.has(`${row} x ${col}`) || !grid[row] || !grid[row][col]) return curr
        set.add(`${row} x ${col}`)
        curr++
        let up = counter(row+1,col) 
        let down = counter(row-1,col)
        let left = counter(row,col-1)
        let right = counter(row,col+1)
        return Math.max(up,down,left,right)
        
    }
    for (let i = 0; i < grid.length; i++) {
        let row = grid[i];
        for (let j = 0; j < row.length; j++) {
            let sq = row[j];
            let text = `${i} x ${j}`
            if (!sq || set.has(text)) continue;
            let count = counter(i,j);
            if (count > max) max = count;
            curr = 0;
        }
    }
    return max
};

var maxAreaOfIsland = function(grid) {
    let max = 0;
    let curr = 0;
    const counter = (row, col) => {
        if (!grid[row] || !grid[row][col]) return curr
        grid[row][col] = 0;
        curr++
        let up = counter(row+1,col) 
        let down = counter(row-1,col)
        let left = counter(row,col-1)
        let right = counter(row,col+1)
        return Math.max(up,down,left,right)
        
    }
    for (let i = 0; i < grid.length; i++) {
        let row = grid[i];
        for (let j = 0; j < row.length; j++) {
            let sq = row[j];
            if (!sq) continue;
            let count = counter(i,j);
            if (count > max) max = count;
            curr = 0;
        }
    }
    return max
};