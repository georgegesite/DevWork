function removeElement(nums, val){
    let i = 0; 
    while( i < nums.length){
        (nums[i]=== val) ? nums.splice(i,1) :  i++
    }
    return nums;
}

var numsExample = [3,2,2,3];
var valExample = 3;

const answer = removeElement(numsExample, valExample);
console.log(answer);