/**
 * @typedef {Object} ListNode
 * @property {number} val
 * @property {ListNode} next
 */
/**
 * Definition for singly-linked list.
 * @param val number
 * @param next ListNode | undefined
 * @constructor ListNode
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

module.exports = ListNode;