/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * 反转前n个节点，返回反转后的头节点
 */
let nNextNode = null;
function reverseN(head, n) {
    if (n === 1) {
        nNextNode = head.next;
        return head;
    }
    const last = reverseN(head.next, n - 1);
    head.next.next = head;
    head.next = nNextNode;
    return last;
}
/**
 * 简化问题：递归到left = 1的时候，就跟reverseN的场景一样了，最后把left前一个节点连到翻转后的头结点即可
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (left === 1) {
        return reverseN(head, right);
    }
    const next = reverseBetween(head.next, left - 1, right - 1);
    // 主要为了把反转后的头节点，和上一个节点连起来
    head.next = next;
    return head;
};
// @lc code=end

