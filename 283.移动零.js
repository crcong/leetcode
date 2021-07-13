/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let now = 0;
    let zeroPrev = 0;
    while (now < nums.length) {
        if (nums[now] !== 0) {
            [nums[now], nums[zeroPrev]] = [nums[zeroPrev], nums[now]];
            zeroPrev++;
        }
        now++;
    }
};
// @lc code=end

