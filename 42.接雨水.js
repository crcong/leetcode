/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const stack = [];
    let result = 0;
    for (let i = 0; i < height.length; i++) {
        let pops = [];
        while (stack.length > 0 && stack[stack.length - 1][1] <= height[i]) {
            pops.push(stack.pop());
        }
        if (stack[stack.length - 1]) {
            pops.push(stack[stack.length - 1]);
        }
        pops = pops.reverse();
        for (let j = 0; j < pops.length; j++) {
            const pop = pops[j];
            if (pops[j + 1]) {
                const min = Math.min(height[i], height[pop[0]])
                result += (min - pops[j + 1][1]) * (i - pop[0] - 1);
            }
        }
        stack.push([i, height[i]]);
    }
    return result;
};
// @lc code=end

