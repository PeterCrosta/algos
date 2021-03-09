var partition = function(head, x) {
    if (!head) return head
    let less = []
    let more = []
    let p = head
    while (p) {
        if (p.val < x) less.push(p)
        else more.push(p)
        p = p.next
    }
    if (!less.length || !more.length) return head
    for (let i = 0; i < less.length - 1; i++) {
        less[i].next = less[i+1]
    }
    for (let j = 0; j < more.length - 1; j++) {
        more[j].next = more[j+1]
    }
    less[less.length - 1].next = more[0]
    more[more.length - 1].next = null
    return less[0]
};