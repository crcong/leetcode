/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// 暴力解法 O(n^2)
// 双指针发 O(n)

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    for (let i = 0, j = height.length - 1; i < j; ) {
        if (height[i] < height[j]) {
            maxArea = Math.max(maxArea, height[i] * (j - i));
            i++;
        } else {
            maxArea = Math.max(maxArea, height[j] * (j - i));
            j--;
        }
    }
    return maxArea;
};
// @lc code=end

