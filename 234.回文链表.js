/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var left = null;
var isPalindrome = function(head) {
    left = head;
    return traverse(head);
};
// 利用后序遍历（调用栈），类似双指针
function traverse(head) {
    if (head === null) {
        return true;
    }
    let res = traverse(head.next);
    res = res && (head.val === left.val);
    left = left.next;
    return res;
}
// @lc code=end

