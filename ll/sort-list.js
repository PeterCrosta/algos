var sortList = function(head) {
    if (!head) return null
    let nodes = [];
    let p = head
    while(p) {
      nodes.push(p);
      p = p.next;
    }

    nodes.sort((a, b) => a.val - b.val);

    for(let i = 0; i < nodes.length-1; i++) {
      nodes[i].next = nodes[i+1];
    }

    nodes[nodes.length-1].next = null;

  return nodes[0];
};