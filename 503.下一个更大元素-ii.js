/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    const stack = [];
    const result = [];
    for (let i = (nums.length * 2) - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= nums[i % nums.length]) {
            stack.pop();
        }
        result[i % nums.length] = stack.length > 0 ? stack[stack.length - 1] : -1;
        stack.push(nums[i % nums.length]);
    }
    return result;
};
// @lc code=end

