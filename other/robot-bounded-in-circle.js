var isRobotBounded = function(instructions) {
    let dir = 0, x = 0, y = 0, dirs = [[0,1],[1,0],[0,-1],[-1,0]];
    const go = () => {
        const [el1,el2] = dirs[dir]
        x += el1
        y += el2
    }
    const run = () => {
        for (let el of instructions) {
            if (el === 'G') go();
            if (el === 'R') dir = dir === dirs.length - 1 ? 0 : dir + 1
            if (el === 'L') dir = dir === 0 ? dirs.length - 1 : dir - 1
        }
    }
    run()
    return (!x && !y) || dir;
};