var flatten = function(head) {
    if (!head) return null
    const findEnds = node => {
        const first = node;
        let last, p = node;
        while (p) {
            if (p.child) {
                const [start,end] = findEnds(p.child)
                start.prev = p
                end.next = p.next
                if (p.next) p.next.prev = end
                p.next = start
                p.child = null
            }
            if (!p.next) last = p
            p = p.next
        }
        return [first,last]
    }
    findEnds(head)
    return head
};