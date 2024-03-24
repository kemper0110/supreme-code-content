const ListNode = require('./ListNode');

/**
 * @typedef {Object} Heap
 * @property {ListNode[]} vec
 * @property {function} push
 * @property {function} top
 * @property {function} empty
 * @property {function} heapify_up
 * @property {function} exchange_top
 * @property {function} pop
 */
function Heap(size) {
    this.vec = []
    this.push = (node) => {
        this.vec.push(node)
        let node_id = this.vec.length - 1;
        while (node_id !== 0) {
            const parent_id = Math.floor((node_id - 1) / 2);
            if (this.vec[node_id].val < this.vec[parent_id].val) {
                const tmp = this.vec[node_id]
                this.vec[node_id] = this.vec[parent_id]
                this.vec[parent_id] = tmp
            }
            node_id = parent_id;
        }
    }
    this.top = () => {
        return this.vec[0]
    }
    this.empty = () => {
        return this.vec.length === 0
    }
    this.heapify_up = () => {
        const size = this.vec.length
        let node_id = 0;
        while (true) {
            const child1_id = 2 * node_id + 1, child2_id = 2 * node_id + 2;
            if (child1_id >= size) break;

            const min_child_id = (child2_id < size && this.vec[child2_id].val < this.vec[child1_id].val) ? child2_id : child1_id;

            if (this.vec[min_child_id].val < this.vec[node_id].val) {
                const tmp = this.vec[min_child_id]
                this.vec[min_child_id] = this.vec[node_id]
                this.vec[node_id] = tmp
                node_id = min_child_id;
            }
            else
                break;
        }
    }
    this.exchange_top = (node) => {
        this.vec[0] = node
        this.heapify_up()
    }
    this.pop = () => {
        this.vec[0] = this.vec[this.vec.length - 1]
        this.vec.pop()
        this.heapify_up()
    }
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
    const heap = new Heap(lists.length)

    for (const list of lists)
        if (list)
            heap.push(list);
    if (heap.empty())
        return null;

    let head = null, current = null;

    const min = heap.top();
    head = current = min;
    if (min.next)
        heap.exchange_top(min.next);
    else
        heap.pop();
    while (!heap.empty()) {
        const min = heap.top();
        current = current.next = min;
        if (min.next)
            heap.exchange_top(min.next);
        else
            heap.pop();
    }
    return head;
};

module.exports = mergeKLists;