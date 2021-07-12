class MinHeap {
    constructor(size) {
        this.heap = []
        this.size = size
    } 
    add(n) {
        const {heap} = this
        heap.push(n)
        let idx = heap.length - 1, curr = heap[idx]
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2)
            let parentVal = heap[parentIdx]
            if (parentVal >= curr) {
                [heap[parentIdx], heap[idx]] = [heap[idx], heap[parentIdx]]
                idx = parentIdx
            } else break
        }
        if (heap.length > this.size) this.remove()
    }
    remove() {
        const {heap} = this
        heap[0] = heap.pop()
        let idx = 0
        let len = heap.length
        while (true) {
            let lIdx = idx * 2 + 1
            let rIdx = idx * 2 + 2 
            let swap = null
            let curr = heap[idx]
            if (lIdx < len) {
                let left = heap[lIdx]
                if (left <= curr) swap = lIdx
            }
            if (rIdx < len) {
                let right = heap[rIdx]
                if (right <= (swap ? heap[lIdx] : curr)) swap = rIdx
            }
            if (!swap) break
            [heap[idx], heap[swap]] = [heap[swap], heap[idx]]
            idx = swap
        }
    }
}
