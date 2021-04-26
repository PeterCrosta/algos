var HitCounter = function() {
    this.hits = []
};


HitCounter.prototype.hit = function(timestamp) {
    this.hits[timestamp] = this.hits[timestamp] || 0
    this.hits[timestamp]++
};


HitCounter.prototype.getHits = function(timestamp) {
    let total = 0
    for (let i = timestamp - 299 >= 0 ? timestamp - 299 : 0; i <= timestamp; i++) {
        if (!this.hits[i]) continue
        total += this.hits[i]
    }
    return total
};