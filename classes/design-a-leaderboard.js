var Leaderboard = function() {
    this.players = new Map()
};


Leaderboard.prototype.addScore = function(playerId, score) {
    const {players} = this
    if (players.has(playerId)) players.set(playerId, players.get(playerId)+score)
    else players.set(playerId,score)
};


Leaderboard.prototype.top = function(K) {
    if (K === 0) return 0
    const {players} = this
    const max = [...players.values()]
    max.sort((a,b) => b-a)
    let total = 0
    for (let i = 0; i < K; i++) total += max[i]
    return total
};


Leaderboard.prototype.reset = function(playerId) {
    const {players} = this
    players.set(playerId,0)
};
