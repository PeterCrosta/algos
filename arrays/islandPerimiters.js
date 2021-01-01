var islandPerimeter = function(grid) {
    let per = 0;
    for (let i = 0; i < grid.length; i++) {
        let row = grid[i];
        for (let j = 0; j < row.length; j++) {
            let sq = row[j];
            if (!sq) continue;
            per += 4;
            if (grid[i-1] && grid[i-1][j]) per -= 2;
            if (row[j-1]) per -= 2;
        }
    }
    return per
};

var islandPerimeter = function(grid) {
    let per = 0;
    for (let i = 0; i < grid.length; i++) {
        let row = grid[i];
        for (let j = 0; j < row.length; j++) {
            let sq = row[j];
            if (!sq) continue;
            if (!grid[i-1] || (grid[i-1] && !grid[i-1][j])) per++;
            if (!grid[i+1] || (grid[i+1] && !grid[i+1][j])) per++;
            if (!row[j+1]) per++;
            if (!row[j-1]) per++;
        }
    }
    return per
};