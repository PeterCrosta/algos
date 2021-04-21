var UndergroundSystem = function() {
    this.cust = new Map()
    this.times = new Map()
};


UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.cust.set(id,[stationName, t])
};


UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let [startSta, startTime] = this.cust.get(id)
    let route = `${startSta}x${stationName}`
    if (this.times.has(route)) {
        let [times, trips] = this.times.get(route)
        this.times.set(route, [times+t-startTime, trips+1])
    } else this.times.set(route, [t-startTime, 1])
};


UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let route = `${startStation}x${endStation}`
    let [times, trips] = this.times.get(route)
    return times/trips
};