var containsDuplicate = function(nums) {
    
    // create hashset
    let mySet = new Set();
    for(let i = 0; i < nums.length; i++){
        //if mnumber in hashset, return true, else add to hashset
        if(mySet.has(nums[i])) return true; else mySet.add(nums[i]);
    }
    return false;
};
var numsExample = [1,1,1,3,3,4,3,2,4,2];
const answer = containsDuplicate(numsExample);
console.log(answer);



// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true