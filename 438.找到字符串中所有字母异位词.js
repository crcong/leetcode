/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const need = {};
    const window = {};
    for (const s of p) {
        need[s] = need[s] ? need[s] + 1 : 1;
    }
    let left = 0;
    let right = 0;
    let valid = 0;
    const result = []
    while (right < s.length) {
        const c = s[right];
        right++;
        if (need[c]) {
            window[c] = window[c] ? window[c] + 1 : 1;
            if (need[c] === window[c]) {
                valid++;
            }
        }

        while (valid === Object.keys(need).length) {
            if (p.length === right - left) {
                result.push(left);
            }
            const d = s[left];
            left++;
            if (need[d]) {
                if (need[d] === window[d]) {
                    valid--;
                }
                window[d]--;
            }
        }
    }
    return result;
};
// @lc code=end

