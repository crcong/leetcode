/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 * 一定要用双指针夹逼法..  暴力3循环和2循环+map都会超时....
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const result = [];
    nums = nums.sort((a, b) => a - b);
    let i = 0;
    let j = 1;
    let k = nums.length - 1;
    outer: while (i < nums.length - 2) {
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum == 0) {
                result.push([nums[i], nums[j], nums[k]]);
                while (nums[j] == nums[++j]) { }
                while (nums[k] == nums[--k]) { }
            } else if (sum > 0) {
                while (nums[k] == nums[--k]) { }
            } else {
                while (nums[j] == nums[++j]) { }
            }
            if (k < 0 || j > nums.length) {
                break outer;
            }
        }
        while (nums[i] == nums[++i]) { }
        if (nums[i] > 0 || i > nums.length - 2) {
            break;
        }
        j = i + 1;
        k = nums.length - 1;
    }
    return result;
};
// @lc code=end

