/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

 var MyCircularQueue = function(k) {
    this.q = new Array(k)
    this.h = -1;
    this.t = -1;
};


MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) {}
    else if (this.isEmpty()) {
        this.h = 0
        this.t = 0
        this.q[0] = value
    } else {
        this.t = this.t === this.q.length - 1 ? 0 : this.t + 1
        this.q[this.t] = value
    }
    
};

MyCircularQueue.prototype.removeBack = function() {
    if (this.isEmpty()) {}
    else if (this.h === this.t) {
        this.q[this.h] = undefined
        this.h = -1
        this.t = -1
    } else {
        this.q[this.h] = undefined
        this.h = this.h === this.q.length - 1 ? 0 : this.h + 1
    }
};

MyCircularQueue.prototype.removeFront = function() {
    if (this.isEmpty()) {}
    else if (this.h === this.t) {
        this.q[this.t] = undefined
        this.h = -1
        this.t = -1
    } else {
        this.q[this.t] = undefined
        this.t = this.t === 0 ? this.q.length - 1 : this.t - 1
    }
}


MyCircularQueue.prototype.front = function() {
    if (this.isEmpty()) return
    return this.q[this.t]
};


MyCircularQueue.prototype.rear = function() {
    if (this.isEmpty()) return
    return this.q[this.h]
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

var maxSlidingWindow = function(nums, k) {
    if (!nums.length) return []
    let deq = new MyCircularQueue(k)
    let max =[]
    let i = 0

    const add = n => {
        while (!deq.isEmpty() && n > deq.front()) deq.removeFront()
        deq.enQueue(n)
    }
    const remove = n => {
        if (deq.rear() === n) deq.removeBack()
    }
    nums.forEach((num, idx) => {
        add(num)
        if (idx - i === k - 1) {
            max.push(deq.rear())
            remove(nums[i])
            i++
        }
    })
    return max
};

// var compress = function(chars) {
//     let char;
//     let hold = [];
//     let num = 1;
//     const addNum = (n) => {
//         let str = `${n}`;
//         for (let i = str.length - 1; i >= 0; i--) hold.push(str[i])
//     }
//     while (chars.length) {
//         char = chars.pop()
//         if (char === chars[chars.length - 1]) {
//             num++
//         } else if (num > 1) {
//             addNum(num);
//             hold.push(char);
//             num = 1;
//         }
//         else hold.push(char);
//     }
//     while (hold.length) {
//         chars.push(hold.pop())
//     }
// };