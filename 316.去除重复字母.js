/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    const stack = [];
    // 记录s中各元素的数量
    const countMap = new Map();
    for (const _s of s) {
        const c = countMap.get(_s);
        countMap.set(_s, c ? c + 1 : 1);
    }
    const map = new Map();
    for (const _s of s) {
        // 减去已遍历元素的数量
        countMap.set(_s, countMap.get(_s) - 1);
        if (map.get(_s)) {
            continue;
        }
        // 维护一个类似递增的单调栈
        while (
            stack.length > 0
            && stack[stack.length - 1] > _s
            // 后面有相同元素才进行删除
            && countMap.get(stack[stack.length - 1]) > 0
        ) {
            map.delete(stack[stack.length - 1]);
            stack.pop();
        }
        stack.push(_s);
        map.set(_s, true);
    }
    return stack.join('');
};
// @lc code=end

