/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let count = 0
  let j = 0
  for (let i = 0; i < g.length; i++) {
    if (i > s.length - 1 || j > s.length - 1) {
      return count
    }
    if (g[i] > s[j]) {
      j = i + 1
      while (j < s.length) {
        if (g[i] <= s[j]) {
          count++
          break
        }
        j++
      }
    } else {
      count++
    }
    j++
  }
  return count
};
// @lc code=end

