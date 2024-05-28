/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(nums.length < 2) return [];
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
    if (target-nums[i] in hash) {
      return [hash[target-nums[i]], i];
    }
        hash[nums[i]] = i;
    }
};