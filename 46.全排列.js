/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */
// @lc code=start
/**
 * 回溯 + 递归
 */
function backtrack(result, nums, temp) {
  if (temp.length === nums.length) {
    result.push(temp.slice())
    return
  }
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (temp.includes(num)) {
      continue;
    }
    temp.push(num);
    backtrack(result, nums, temp)
    temp.pop();
  }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = []
  backtrack(result, nums, [])
  return result;
};
// @lc code=end
