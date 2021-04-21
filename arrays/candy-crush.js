var candyCrush = function(board) {
    let hold = []
    let changes = 1
    const checkRow = () => {
        for (let i = 0; i < board.length; i++) {
            const row = board[i]
            let coord = [], curr;
            for (let j = 0; j < row.length; j++) {
                const c = row[j]
                if (c === curr && c) coord.push([i,j])
                else {
                    if (coord.length >= 3) hold.push(...coord)
                    coord = [[i,j]]
                    curr = c
                }
            }
            if (coord.length >= 3) hold.push(...coord)
        }
    }
    const checkCol = () => {
        for (let i = 0; i < board[0].length; i++) {
            let coord = [], curr;
            for (let j = 0; j < board.length; j++) {
                const c = board[j][i]
                if (c === curr && c) coord.push([j,i])
                else {
                    if (coord.length >= 3) hold.push(...coord)
                    coord = [[j,i]]
                    curr = c
                }
            }
            if (coord.length >= 3) hold.push(...coord)
        }
    }
    const crush = () => {
        hold.forEach(([y,x]) => board[y][x] = 0)
        changes = hold.length
        hold = []
    }
    
    const fall = () => {
        for (let i = 0; i < board[0].length; i++) {
            let offset = 0
            for (let j = board.length - 1; j >= 0; j--) {
                let c = board[j][i]
                if (!c) {
                    while (j - offset >= 0) {
                        if (board[j - offset][i]) {
                            [board[j][i], board[j-offset][i]] = [board[j-offset][i],board[j][i]]
                            break
                        } else offset++
                    }
                }
            }
        }
    }
    while (changes) {
        checkRow()
        checkCol()
        crush()
        fall()
    }
    return board
};