


var LRUCache = function(capacity) {
    this.capacity = capacity
    this.cache = new Map()

};


LRUCache.prototype.get = function(key) {
    const {cache, capacity} = this
    if (cache.has(key)) {
        const retVal = cache.get(key)
        cache.delete(key)
        cache.set(key, retVal)
        return retVal
    }
    else return -1
};

LRUCache.prototype.put = function(key, value) {
    const {cache, capacity} = this
    cache.delete(key)
    cache.set(key,value)
    if (cache.size > capacity) {
        for (let pair of cache) {
            cache.delete(pair[0])
            break
        }
    }
};

