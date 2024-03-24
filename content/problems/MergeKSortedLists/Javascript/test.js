const {expect, describe, test} = require("@jest/globals");
const ListNode = require('./ListNode');
const mergeKLists = require('./solution');

describe('mergeKLists', () => {
    test('[[1,4,5],[1,3,4],[2,6]] should become [1,1,2,3,4,4,5,6]', () => {
        const lists = [
            new ListNode(1, new ListNode(4, new ListNode(5))),
            new ListNode(1, new ListNode(3, new ListNode(4))),
            new ListNode(2, new ListNode(6)),
        ];
        const output = mergeKLists(lists);

        const result = [];
        let node = output;
        while (node !== null) {
            result.push(node.val);
            node = node.next;
        }

        expect(result).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
    });

    test('[] should become null', () => {
        expect(mergeKLists([])).toBeNull();
    });

    test('[[]] should become null', () => {
        expect(mergeKLists([null])).toBeNull();
    });
});

function listToLinkedList(arr) {
    return arr.reduceRight((next, val) => new ListNode(val, next), null);
}

function linkedListToArray(head) {
    const result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}