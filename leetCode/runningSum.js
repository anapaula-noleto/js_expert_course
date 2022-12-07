/**
 * @param {number[]} nums
 * @return {number[]}
 */

function runningSum(nums) {
  let sum = 0;
  return nums.map((number) => {
    let previousNumber = sum;
    sum = number + previousNumber;
    return sum;
  });
}

function compareArray(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

console.assert(compareArray(runningSum([3, 1, 2, 10, 1]), [3, 4, 6, 16, 17]));
console.assert(compareArray(runningSum([1, 1, 1, 1, 1]), [1, 2, 3, 4, 5]));
