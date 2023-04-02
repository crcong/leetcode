/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 *
 * 贪心算法
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0
  let ten = 0
  let twenty = 0
  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i]
    if (bill === 5) {
      five++
    } else if (bill === 10) {
      if (five === 0) {
        return false
      }
      five--
      ten++
    } else if (bill === 20) {
      // 贪心，先消耗10块，再消耗5块
      if (ten > 0 && five > 0) {
        ten--
        five--
        twenty++
      } else if (five >= 3) {
        five -= 3
        twenty++
      } else {
        return false
      }
    }
  }
  return true
};
// @lc code=end

