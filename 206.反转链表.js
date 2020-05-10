/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prevHead = null;
    while (head) {
        const curNext = head.next;
        head.next = prevHead;
        prevHead = head;
        head = curNext;
    }
    return prevHead;
};
// @lc code=end

