var highFive = function(items) {
    let students = new Map()
    for (let i = 0; i < items.length; i++) {
        let stu = items[i][0]
        let score = items[i][1]
        if (students.has(stu)) {
            let curr = students.get(stu)
            curr.push(score)
        } else {
            students.set(stu,[score])
        }
    }
    students.forEach((el, id) => {
        el.sort((a,b) => b - a)
        let newArr = el.slice(0,5)
        let sum = 0
        for (let j = 0; j < 5; j++) sum += newArr[j]
        el = Math.floor(sum/5)
        students.set(id,el)
    })
    return [...students.entries()]
};