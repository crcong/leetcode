/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const need = {};
    const window = {};
    let left = 0;
    let right = 0;
    let valid = 0;
    for (const s of s1) {
        need[s] = need[s] ? need[s] + 1 : 1;
    }
    while (right < s2.length) {
        const c = s2[right];
        right++;
        if (need[c]) {
            window[c] = window[c] ? window[c] + 1 : 1;
            if (window[c] === need[c]) {
                valid++;
            }
        }

        while (valid === Object.keys(need).length) {
            if (s1.length === right - left) {
                return true;
            }
            const d = s2[left];
            left++;

            if (need[d]) {
                if (need[d] === window[d]) {
                    valid--;
                }
                window[d]--;
            }
        }
    }
    return false;
};
// @lc code=end

