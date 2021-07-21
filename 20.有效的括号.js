/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 === 1) {
        return false;
    }
    const map = {
        ')': '(',
        ']': '[',
        '}': '{',
    }
    const stack = [];
    for (const _s of s) {
        if (stack.length > 0 && stack[stack.length - 1] === map[_s]) {
            stack.pop();
        } else {
            stack.push(_s);
        }
    }
    return stack.length === 0;
};
// @lc code=end

