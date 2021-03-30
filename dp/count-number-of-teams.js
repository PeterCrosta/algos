var numTeams = function(rating) {
    let total = 0;
    for (let i = 1; i < rating.length - 1; i++) {
        let l = [0, 0]
        let r = [0, 0]
        for (let j = 0; j < rating.length; j++) {
            if (rating[j] < rating[i]) {
                j < i ? l[0]++ : r[0]++
            }
            if (rating[j] > rating[i]) {
                j < i ? l[1]++ : r[1]++
            }
        }
        total += l[0]*r[1] + l[1]*r[0]
    }
    return total
};