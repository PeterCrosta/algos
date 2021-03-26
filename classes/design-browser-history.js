/**
 * @param {string} homepage
 */
 var BrowserHistory = function(homepage) {
    this.hist = [homepage];
    this.p = 0
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.p++
    if (this.p >= this.hist.length - 1) this.hist[this.p] = url
    else {
        this.hist = this.hist.slice(0,this.p)
        this.hist[this.p] = url
    }
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    this.p = this.p - steps < 0 ? 0 : this.p - steps
    return this.hist[this.p]
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    this.p = this.p + steps >= this.hist.length ? this.hist.length - 1 : this.p + steps
    return this.hist[this.p]
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */