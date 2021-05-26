var leastInterval = function(tasks, n) {
    let map = new Map()
    for (let task of tasks) {
        if (map.has(task)) map.set(task, map.get(task) + 1)
        else map.set(task, 1)
    }
    const taskArr = Array.from(map).sort((a,b) => b[1] - a[1])
    let idle = (taskArr[0][1] - 1) * n
    const minComp = taskArr[0][1] - 1
    for (let i = 1; i < taskArr.length; i++) {
        idle -= Math.min(minComp, taskArr[i][1])
    }
    return idle > 0 ? idle + tasks.length : tasks.length
};