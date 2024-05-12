// My solution O( log n)
var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let ans = -1;

		while (low <= high) {
      const mid = Math.floor((low + high) / 2);
        //[1,3,5,6]
      if (nums[mid] < target) {
        low = mid + 1;
        ans = mid+1;
      } else if (nums[mid] === target) { // if target in array, return index 
        return mid;
      } else {
        ans  = mid;
        high = mid - 1;
      }
	    }
      return ans;
    

};


var numsExample  = [1,3,5,6];
var targetExample = 2;
console.log(searchInsert(numsExample, targetExample));

// Input: nums = [1,3,5,6], target = 2
// Output: 1
