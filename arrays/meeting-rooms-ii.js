// var minMeetingRooms = function(intervals) {
//     const meetings = []
//     const fill = arr => {
//         for (let i = arr[0]; i < arr[1]; i++) meetings[i] = meetings[i] ? meetings[i]+1 : 1;
//     }
//     intervals.forEach(el => fill(el))
//     for (let i = 0; i < meetings.length; i++) meetings[i] = meetings[i] ? meetings[i] : 0;
//     return Math.max(...meetings)
// };

var minMeetingRooms = function(intervals) {
    let count = 0, max = 1;
    const times = []
    intervals.forEach(i => {
        times.push([i[0],+1])
        times.push([i[1],-1])
    })
    times.sort((a,b) => {
        if (a[0]!==b[0]) return a[0]-b[0]
        else return a[1]
    })
    times.forEach(el => {
        count+=el[1]
        max = Math.max(count,max)
    })
    return max
};