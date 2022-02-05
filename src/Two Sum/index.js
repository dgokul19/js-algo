/* 

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. 

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/

let nums = [2, 7, 11, 15];
let target = 9;

const findTwoSum = (arr, target) => {
  let result = {};

  for (let index in arr) {
    let targetValue = target - arr[index];

    if (result[targetValue]) {
      return [result[targetValue], index];
    }
    result[arr[index]] = index;
  }
  return null;
};

console.log(findTwoSum(nums, target));
