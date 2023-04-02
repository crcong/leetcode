/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */


/**
 * 回溯
 * board = [
 *  ["A","B","C","E"],
 *  ["S","F","C","S"],
 *  ["A","D","E","E"]
 * ]
 * word = "ABCCED"
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rowLength = board.length
  const colLength = board[0].length
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (word[0] === board[i][j]) {
        if (backtrace(i, j, 0)) {
          return true
        }
      }
    }
  }
  return false

  /**
   * find 寻找函数
   * @param {Number} i - 方位
   * @param {Number} j - 方位
   * @param {Number} current - 当前路径的长度
   * @returns result
   */
  function backtrace(i, j, current) {
    // 超出边界
    if (i < 0 || i > rowLength - 1 || j < 0 || j > colLength - 1) {
      return false
    }
    const currentWord = board[i][j]
    if (currentWord !== word[current]) {
      return false
    }
    if (current === word.length - 1) {
      return true
    }
    board[i][j] = null
    // 查找四个方向
    const result =
      backtrace(i + 1, j, current + 1)
      || backtrace(i - 1, j, current + 1)
      || backtrace(i, j + 1, current + 1)
      || backtrace(i, j - 1, current + 1)
    if (result) {
      return true
    }
    board[i][j] = currentWord
    return false
  }
};
// @lc code=end

