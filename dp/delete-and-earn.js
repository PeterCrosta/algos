var deleteAndEarn = function(nums) {
    let tots = [0], ans = [0];
    for (let n of nums) {
        if (!tots[n]) tots[n] = n
        else tots[n] += n
    }
    if (tots.length === 2) return tots[1]
    if (tots[1] === undefined) tots[1] = 0
    ans[1] = tots[1]
    for (let i = 2; i < tots.length; i++) {
        if (tots[i] === undefined) {
            tots[i] = 0
        }
        let prev = ans[i-1]
        let check = tots[i]+ans[i-2]
        ans[i] = Math.max(prev,check)
    }
    return ans[ans.length - 1]
};