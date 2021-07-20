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
    // 自己捣鼓一个小时写出来的
    // const stack = [];
    // let result = 0;
    // for (let i = 0; i < height.length; i++) {
    //     let pops = [];
    //     while (stack.length > 0 && stack[stack.length - 1][1] <= height[i]) {
    //         pops.push(stack.pop());
    //     }
    //     if (stack[stack.length - 1]) {
    //         pops.push(stack[stack.length - 1]);
    //     }
    //     pops = pops.reverse();
    //     for (let j = 0; j < pops.length; j++) {
    //         const pop = pops[j];
    //         if (pops[j + 1]) {
    //             const min = Math.min(height[i], height[pop[0]])
    //             result += (min - pops[j + 1][1]) * (i - pop[0] - 1);
    //         }
    //     }
    //     stack.push([i, height[i]]);
    // }
    // return result;

    // 单调栈标准答案，速度98%... 同样的思路
    const stack = [];
    let result = 0;
    for (let i = 0; i < height.length; i++) {
        const h = height[i];
        while (stack.length > 0 && h > height[stack[stack.length - 1]]) {
            const top = stack.pop();
            if (stack.length === 0) {
                break;
            }
            const left = stack[stack.length - 1];
            const waterWidth = i - left - 1;
            const waterHeight = Math.min(height[left], height[i]) - height[top];
            result += waterHeight * waterWidth;
        }
        stack.push(i);
    }
    return result;
};
// @lc code=end

