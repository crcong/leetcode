/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// map方法
var twoSum = function(nums, target) {
    const targetMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (targetMap.has(diff)) {
            return [targetMap.get(diff), i];
        }
        targetMap.set(nums[i], i);
    }
};

// 暴力法
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return [];
// };
// @lc code=end

