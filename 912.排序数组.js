/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 * 给你一个整数数组 nums，请你将该数组升序排列。
 * 10大算法
 * 1. 冒泡排序 时间复杂度最好O(N), 最坏0(n^2)
 *      - 前后项比较，如果当前项比后一项大，则两项交换位置
 *      - 需要循环n-1轮，每轮两两交换(除去已确定的最大值)，每一轮得出最后最大项
 *      - Your runtime beats 8.6 % of javascript submissions
 *      - Your memory usage beats 45.87 % of javascript submissions (43.1 MB)
 *
 * 2. 插入排序 时间复杂度最好O(N), 最坏0(n^2)
 *      - 对于少量元素的排序，它是一个有效的算法。
 *      - 先把一个元素放到新数组，然后遍历每个元素，放到新数组，插入元素跟数组末尾比较，如果小则继续向前面的比较。如果比较到第一个元素，则把这个元素插到最前面。
 *      - Your runtime beats 30.62 % of javascript submissions
 *      - Your memory usage beats 24.09 % of javascript submissions (45.4 MB)
 * 3. 快速排序
 *      - 分治思想
 */

// 冒泡排序
const bubbleSort = (nums) => {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            // i轮比较要除去已经排好的较大值
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }
    return nums;
};

// 插入排序
const insertSort = (nums) => {
    const newNums = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        for (let j = newNums.length - 1; j >= 0; j--) {
            const lastBigNum = newNums[j];
            if (num >= lastBigNum) {
                newNums.splice(j + 1, 0, num);
                break;
            }
            // 比最前面的元素还小，就插入第一项
            if (j === 0) {
                newNums.unshift(num);
            }
        }
    }
    return newNums;
}

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function (nums) {
    quickSort(nums, 0, nums.length - 1);
    return nums;

    function quickSort(nums, left, right) {
        if (left >= right) {
            return;
        }
        let pivotIndex = partition(nums, left, right);
        quickSort(nums, left, pivotIndex - 1);
        quickSort(nums, pivotIndex + 1, right);
    }

    function partition(arr, left, right) {
        // 1. 选取pivot
        // 2. 把数组分割成 <=pivot, pivot, >=pivot 三部分

        // j是pivot位置

        // [pivot][小堆][大堆][乱堆]
        // 有一个探索乱堆的指针i
        // 小堆的最后一个元素指针j
        // 当探索乱堆时遇到比pivot大，则i += 1略过
        // 当探索乱堆时遇到比pivot小，则i和j+1(大堆的第一个元素)交换, j += 1，再i += 1
        // 乱堆探索完，则pivot和指针j交换，则是pivot合适位置

        // 选取最左侧为pivot位置
        let pivot = arr[left];
        // i是未探索的索引
        let i = left + 1;
        // j是小堆的最后一个元素指针，默认值是pivot的位置
        let j = left;
        for (; i <= right; i++) {
            const num = arr[i];
            if (num < pivot) {
                j++;
                [arr[j], arr[i]] = [arr[i], arr[j]];
            }
        }
        [arr[left], arr[j]] = [arr[j], arr[left]];
        return j;
    }

    // 普通快排
    // Your runtime beats 59.86 % of javascript submissions
    // Your memory usage beats 44.86 % of javascript submissions (43.1 MB)
};
// @lc code=end

