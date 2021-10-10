/**
 * @param {number[]} nums
 * @return {number[]}
 */


// input of [1,2,3,4]
var runningSum = function(nums) {
    // set variable for new array
    let newNums = [];
     newNums[0] = nums[0]
    // Firs lets create a loop for numns
    for(let i = 1; i < nums.length; i++){
          newNums[i] = nums[i] + newNums[i-1]
    }
    return newNums; // expected out put [1,3,6,10]
};
