/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // 遇到val，就跟最后一个非val元素交换位置
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        if (nums[left] === val) {
            [nums[right], nums[left]] = [nums[left], nums[right]];
            right--;
        } else {
            left++;
        }
    }
    return left;

    // 移动零同样解法也同样可解
    // let now = 0;
    // let valPrev = 0;
    // while (now < nums.length) {
    //     if (nums[now] !== val) {
    //         [nums[now], nums[valPrev]] = [nums[valPrev], nums[now]];
    //         valPrev++;
    //     }
    //     now++;
    // }
    // return valPrev;
};
// @lc code=end

