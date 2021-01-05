var numIslands = function(grid) {
    let count = 0;
    let set = new Set();
    const explore = (row, col) => {
        if (set.has(`${row} x ${col}`) || !grid[row] || !grid[row][col] || grid[row][col] === '0') return;
        set.add(`${row} x ${col}`)
        explore(row+1,col)
        explore(row-1,col)
        explore(row,col+1)
        explore(row,col-1)
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (set.has(`${i} x ${j}`) || grid[i][j] === '0') continue;
            count++;
            explore(i,j)
        }
    }
    return count
};

var numIslands = function(grid) {
    let count = 0;
    const explore = (row, col) => {
        if (!grid[row] || !grid[row][col] || grid[row][col] === '0') return;
        grid[row][col] = '0'
        explore(row+1,col)
        explore(row-1,col)
        explore(row,col+1)
        explore(row,col-1)
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '0') continue;
            count++;
            explore(i,j)
        }
    }
    return count
};