/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// 斐波那契数列

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 1) {
        return 1;
    }
    let first = 1;
    let second = 2;
    let result = 0;
    for (let i = 3; i <= n; i++) {
        result = first + second;
        first = second;
        second = result;
    }
    return second;
};
// @lc code=end

