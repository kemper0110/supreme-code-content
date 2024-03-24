const ListNode = require('./ListNode');

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode|null}
 */
function mergeTwoLists(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    let dummyHead = new ListNode(-1);
    let current = dummyHead;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if (list1) current.next = list1;
    if (list2) current.next = list2;

    return dummyHead.next;
}

module.exports = mergeTwoLists;