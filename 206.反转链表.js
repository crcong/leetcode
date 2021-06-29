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
    // 非递归版本
    // let prevHead = null;
    // while (head) {
    //     const curNext = head.next;
    //     head.next = prevHead;
    //     prevHead = head;
    //     head = curNext;
    // }
    // return prevHead;

    // 尝试一下递归的版本，练习下递归思维
    if (head === null) return null;
    if (head.next === null) return head;
    const last = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return last;
};
// @lc code=end

