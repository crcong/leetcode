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

let next = null;
function kReverse(head, k) {
    if (head === null) {
        return null;
    }
    if (k === 1) {
        next = head.next;
        return head;
    }
    const last = kReverse(head.next, k - 1);
    head.next.next = head;
    head.next = next;
    return last;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (head === null) {
        return null;
    }
    let nextHead = head;
    for (let i = 0; i < k; i++) {
        if (nextHead === null) {
            return head;
        }
        nextHead = nextHead.next;
    }
    const newHead = kReverse(head, k);
    head.next = reverseKGroup(nextHead, k);
    return newHead;
};
// @lc code=end

