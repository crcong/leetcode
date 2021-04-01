/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 *
 */
/**
    给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

    你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 */



// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // 哈希表法
    // const map = {};
    // for (const num of nums) {
    //     map[num] = map[num] ? ++map[num] : 1;
    //     if (map[num] > nums.length / 2) {
    //         return num;
    //     }
    // }
    // return -1;

    // 摩尔根投票法
    let candidate;
    let count = 0;
    for (const num of nums) {
        if (count > 0) {
            count += (num === candidate) ? 1 : -1;
        } else {
            candidate = num;
            count = 1;
        }
    }
    return candidate;
};
// @lc code=end

