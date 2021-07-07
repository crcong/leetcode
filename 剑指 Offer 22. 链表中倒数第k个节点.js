// https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    let slow = head;
    let fast = head;
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};
