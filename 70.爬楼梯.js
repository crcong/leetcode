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
const map = {};
var climbStairs = function(n) {
    // if (n == 1) {
    //     return 1;
    // }
    // let first = 1;
    // let second = 2;
    // let result = 0;
    // for (let i = 3; i <= n; i++) {
    //     result = first + second;
    //     first = second;
    //     second = result;
    // }
    // return second;

    // 递归+哈希表版本，不缓存过不了测试
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (map[n]) {
        return map[n];
    } else {
        const r = climbStairs(n - 1) + climbStairs(n - 2);
        map[n] = r;
    }
    return map[n];
};
// @lc code=end

