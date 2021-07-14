/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const stack = [];
    const map = new Map();
    for (let i = nums2.length - 1; i >= 0; i--) {
        while (stack.length !== 0 && nums2[i] > stack[stack.length - 1]) {
            stack.pop();
        }
        map.set(nums2[i], stack.length === 0 ? -1 : stack[stack.length - 1]);
        stack.push(nums2[i]);
    }
    const result = [];
    for (let i = 0; i < nums1.length; i++) {
        result.push(map.get(nums1[i]));
    }
    return result;
};
// @lc code=end

