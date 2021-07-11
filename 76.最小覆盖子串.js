/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const need = {};
    // 左开右闭
    const window = {};
    for (const s of t) {
        need[s] = need[s] ? need[s] + 1 : 1;
    }
    let left = 0;
    let right = 0;
    let valid = 0;
    let length = -1;
    let start = 0;
    while (right < s.length) {
        // char是移入窗口的字符
        const char = s[right];
        // 右移窗口
        right++;
        // 进行窗口内数据的一系列更新
        if (need[char]) {
            window[char] = window[char] ? window[char] + 1 : 1;
            if (need[char] === window[char]) {
                valid++;
            }
        }
        // 判断左侧窗口是否要收缩
        while (valid === Object.keys(need).length) {
            if (length === -1 || right - left < length) {
                start = left;
                length = right - left;
            }

            // delateChar是将要移除窗口的字符
            const deleteChar = s[left];
            left++;
            // 进行窗口内数据的一系列更新
            if (need[deleteChar]) {
                if (window[deleteChar] === need[deleteChar]) {
                    valid--;
                }
                window[deleteChar]--;
            }
        }
    }
    return length === -1 ? '' : s.substr(start, length);
};
// @lc code=end

