/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
class MonotonicQueue {
    constructor() {
        this.arr = [];
    }

    push(value) {
        while (this.arr.length > 0 && this.arr[this.arr.length - 1] < value) {
            this.arr.pop();
        }
        this.arr.push(value);
    }

    // 如果弹出的是跟队头最大值一样，则弹出，否则不操作队列
    pop(value) {
        if (value === this.arr[0]) {
            this.arr.shift();
        }
    }

    max() {
        return this.arr[0];
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const result = [];
    const window = new MonotonicQueue();
    for (let i = 0; i < nums.length; i++) {
        if (i < k - 1) {
            window.push(nums[i]);
        } else {
            window.push(nums[i]);
            result.push(window.max());
            window.pop(nums[i - k + 1]);
        }
    }
    return result;
};
// @lc code=end

