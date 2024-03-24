const {expect, describe, test} = require("@jest/globals");
const ListNode = require('./ListNode');
const mergeTwoLists = require('./solution');

describe('mergeTwoLists', () => {
    test.each`
    list1                               |   list2               |   expected            
    ${[1, 2, 4]}                        |   ${[1, 3, 4]}        |   ${[1, 1, 2, 3, 4, 4]}   
    ${[1234, 5678, 9012]}              |   ${[14690]}          |   ${[1234, 5678, 9012, 14690]}
    ${[2, 2, 3]}                        |   ${[4]}              |   ${[2, 2, 3, 4]}
    ${[2, 3, 1]}                        |   ${[4]}              |   ${[2, 3, 1, 4]}
    ${[]}                               |   ${[0]}              |   ${[0]}
    ${[2, 2, 3, 3, 4]}                  |   ${[4, 4, 5, 5, 6]}  |   ${[2, 2, 3, 3, 4, 4, 4, 5, 5, 6]}
    `('mergeTwoLists $list1 $list2 -> $expected', ({list1, list2, expected}) => {
        const l1 = listToLinkedList(list1);
        const l2 = listToLinkedList(list2);
        let result = mergeTwoLists(l1, l2);
        const merged = linkedListToArray(result);
        expect(merged).toEqual(expected);
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