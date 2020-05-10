/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

/*
测试用例：
function ListNode(val) {
    this.val = val;
    this.next = null;
}
const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
a.next = b;
b.next = c;
c.next = d;
console.log(swapPairs(a));
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
// 迭代法，也可以用递归
var swapPairs = function (head) {
    let curHead = head;
    // 奇数
    let oddHead = null;
    let prevOddHead = null;
    let secondNode = head && head.next ? head.next : head;

    while (curHead) {
        // 缓存下一个节点
        const nextHead = curHead.next;
        if (oddHead === null) {
            oddHead = curHead;
            if (prevOddHead === null) {
                prevOddHead = curHead;
            }
        } else {
            curHead.next = oddHead;
            // 把1链接到4
            prevOddHead.next = curHead;
            prevOddHead = oddHead;
            oddHead.next = nextHead;
            oddHead = null;
        }
        curHead = nextHead;
    }
    return secondNode;
};
// @lc code=end

