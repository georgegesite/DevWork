var majorityElement = function(nums) {
    let res = nums[0];
    let count = 1;
    
    for (let i = 1; i < nums.length; i++)
    {
            if (count === 0) res = nums[i];
            if (res === nums[i]) count++; else count--;
            console.log(count);
            
    }
    return res;
    };


    var  nums = [2,2,1,1,1,2,2]
                // 2,1,0,1,0,1
    console.log(majorityElement(nums));