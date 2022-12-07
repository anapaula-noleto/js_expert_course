/**
 * The pivot index is the index where the sum of all the numbers strictly to the
 * left of the index is equal to the sum of all the numbers strictly
 * to the index's right.
 * @param {number[]} nums
 * @return {number}
 */
function pivotIndex(nums) {
  function sumArray(arr) {
    return arr.reduce((total, number) => (total += number), 0);
  }
  let left = [0];
  let right = [0];
  return nums.findIndex((num, index, numsArr) => {
    right = [...numsArr].splice(index + 1);
    if (index > 0) {
      left = [...numsArr].splice(0, index);
    }
    return sumArray(right) === sumArray(left);
  });
}

console.assert(pivotIndex([1, 7, 3, 6, 5, 6]) === 3);
console.assert(pivotIndex([1, 2, 3]) === -1);
console.assert(pivotIndex([2, 1, -1]) === 0);
