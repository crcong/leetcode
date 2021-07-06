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
// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// var left = null;
// var isPalindrome = function(head) {
//     left = head;
//     return traverse(head);
// };
// // 利用后序遍历（调用栈），类似双指针
// function traverse(head) {
//     if (head === null) {
//         return true;
//     }
//     let res = traverse(head.next);
//     res = res && (head.val === left.val);
//     left = left.next;
//     return res;
// }
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 利用双指针得到中间项，然后翻转后面的链表，再一一比对，类似双指针
var isPalindrome = function(head) {
    let fast = head;
    let slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    if (fast !== null && fast.next === null) {
        slow = slow.next;
    }
    let reversed = reverse(slow);
    while (reversed !== null) {
        if (reversed.val !== head.val) {
            return false
        }
        head = head.next;
        reversed = reversed.next;
    }
    return true;
};

function reverse(head) {
    if (head === null || head.next === null) {
        return head;
    }
    const last = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return last;
}
// @lc code=end

