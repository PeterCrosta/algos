
var MyCircularQueue = function(k) {
    this.q = new Array(k)
    this.h = -1;
    this.t = -1;
};


MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) {
        return false
    }
    if (this.isEmpty()) {
        this.h = 0
        this.t = 0
        this.q[0] = value
        return true
    } else {
        this.t = this.t === this.q.length - 1 ? 0 : this.t + 1
        this.q[this.t] = value
        return true
    }
    
};


MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false
    if (this.h === this.t) {
        this.q[this.h] = undefined
        this.h = -1
        this.t = -1
        return true
    } else {
        this.q[this.h] = undefined
        this.h = this.h === this.q.length - 1 ? 0 : this.h + 1
        return true
    }
};


MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) return -1
    return this.q[this.h]
};


MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) return -1
    return this.q[this.t]
};


MyCircularQueue.prototype.isEmpty = function() {
   if (this.t === this.h && this.q[this.h] === undefined) return true
    return false
};


MyCircularQueue.prototype.isFull = function() {
    if (this.t === this.h - 1) return true
    if (this.t === this.q.length - 1 && this.h === 0) return true
    return false
};

