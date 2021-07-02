/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var newNext = null;
function reverseK(node, k) {
    if (node === null) {
        return null;
    }
    if (k === 1) {
        newNext = node.next;
        return node;
    }
    const last = reverseK(node.next, k - 1);
    if (node.next === null) {
        debugger
    }
    node.next.next = node;
    node.next = newNext;
    return last;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (head === null) {
        return head;
    }
    if (head.next === null) {
        return head;
    }
    let _head = head;
    for (let i = 0; i < k; i++) {
        if (_head === null) {
            return head;
        }
        _head = _head.next;
    }
    const _newHead = reverseK(head, k);
    const nextNode = _head;
    const newHead = reverseKGroup(nextNode, k);
    head.next = newHead;
    return _newHead;
};
// @lc code=end

