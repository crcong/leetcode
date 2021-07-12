/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let left = 0;
    let right = 0;
    const window = {};
    let length = 0;
    while (right < s.length) {
        const c = s[right];
        right++;
        window[c] = window[c] ? window[c] + 1 : 1;
    
        while (window[c] > 1) {
            const d = s[left];
            left++;

            window[d]--;
        }

        length = Math.max(length, right - left);
    }
    return length;
};
// @lc code=end

