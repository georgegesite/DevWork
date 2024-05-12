var removeDuplicates = function(nums) {
let mySet = new Set();


let i = 0;
while(i < nums.length){
    if(mySet.has(nums[i])) {
        nums.splice(i,1);
    } else {
        mySet.add(nums[i]);
        i++;
    }
}
return nums;
};

var numsExample = [5,1,2,3,4,5,6,1];

const answer = removeDuplicates(numsExample);
console.log(answer);
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

