var merge = function(nums1, m, nums2, n) {
    let p = nums1.length - 1;
    let p1 = m - 1;
    let p2 = n - 1;
    while (p1 >= 0 || p2 >= 0) {
        let el1 = p1 >= 0 ? nums1[p1] : -Infinity
        let el2 = p2 >= 0 ? nums2[p2] : -Infinity
        if (el1 >= el2) {
            nums1[p] = el1
            p1--
            p--
        } else {
            nums1[p] = el2
            p2--
            p--
        }
    }
    return nums1
};