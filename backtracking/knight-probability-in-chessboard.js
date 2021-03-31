var knightProbability = function(N, K, r, c) {
    let memo = {}
    const move = (turn = 0, row = r, col = c) => {
        let key = `${turn}x${row}x${col}`
        if (memo[key]) return memo[key]
        if (row < 0 || row >= N || col < 0 || col >= N) return 0
        if (turn === K) {
            return 1
        }
        let count = 0
        count += move(turn+1, row+2, col+1)
        count += move(turn+1, row+2, col-1)
        count += move(turn+1, row+1, col-2)
        count += move(turn+1, row-1, col-2)
        count += move(turn+1, row-2, col-1)
        count += move(turn+1, row-2, col+1)
        count += move(turn+1, row-1, col+2)
        count += move(turn+1, row+1, col+2)
        
        memo[key] = count
        return count
    }
    let outcomes = move()
    return outcomes/Math.pow(8,K)
};