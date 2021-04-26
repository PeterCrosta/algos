// var HitCounter = function() {
//     this.hits = []
// };


// HitCounter.prototype.hit = function(timestamp) {
//     this.hits[timestamp] = this.hits[timestamp] || 0
//     this.hits[timestamp]++
// };


// HitCounter.prototype.getHits = function(timestamp) {
//     let total = 0
//     for (let i = timestamp - 299 >= 0 ? timestamp - 299 : 0; i <= timestamp; i++) {
//         if (!this.hits[i]) continue
//         total += this.hits[i]
//     }
//     return total
// };

var HitCounter = function() {
    this.hits = [[0,0]]
};

HitCounter.prototype.hit = function(timestamp) {
    const {hits} = this, last = hits[hits.length - 1]
    if (last[0] === timestamp) last[1]++
    else hits.push([timestamp,1])
};

HitCounter.prototype.getHits = function(timestamp) {
    const {hits} = this
    let i = hits.length - 1, count = 0
    while (i >= 0 && hits[i][0] > timestamp - 300) {
        count += hits[i][1]
        i--
    }
    return count
};