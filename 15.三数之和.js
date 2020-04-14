/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const result = new Set();
    for (let i = 0; i < nums.length; i++) {
        const diffMap = new Map();
        for (let j = i + 1; j < nums.length; j++) {
            const diff = 0 - nums[i] - nums[j];
            if (diffMap.has(nums[j])) {
                const arr = [nums[i], nums[j], diffMap.get(nums[j])];
                result.add(arr.sort((a, b) => a - b).toString());
            } else {
                diffMap.set(diff, nums[j]);
            }
        }
    }
    return [...result].map(e => e.split(',').map(l => Number(l)));
};
// @lc code=end

