var minMeetingRooms = function(intervals) {
    const meetings = []
    const fill = arr => {
        for (let i = arr[0]; i < arr[1]; i++) meetings[i] = meetings[i] ? meetings[i]+1 : 1;
    }
    intervals.forEach(el => fill(el))
    for (let i = 0; i < meetings.length; i++) meetings[i] = meetings[i] ? meetings[i] : 0;
    return Math.max(...meetings)
};