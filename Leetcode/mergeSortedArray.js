var nums1 = [1,2,3,0,0,0];
 var m = 3;
var nums2 = [2,5,6];
var n = 3;

var merge = function(nums1, m, nums2, n) {
    m--; // m = 2
    n--; // n = 2 
    let i = nums1.length - 1; // i = 5
    while (i >= 0) {
      if (n > -1 && m > -1 && nums1[m] >= nums2[n]) { // true true 3>=6  false
        nums1[i] = nums1[m];
        nums1[m] = nums2[n];
        m--;
      }
      else if (n > -1) { // true 
        nums1[i] = nums2[n--];
      }
      i--;
    }
    console.log(nums1);
  };

console.log(merge(nums1, m, nums2,n));

// arrSize = m + n;
// var nums3 = nums1.concat(nums2);
// nums3.sort();
// console.log(nums3);

// mergelist = [];
// for (let i = 0; i <nums3.length; i++)
// {
//     if (nums3[i] > 0 )
//     {
//         mergelist.push(nums3[i])
//     }
// }

// if (arrSize === mergelist.length)
// {
//     nums1 = mergelist;
//     console.log(nums1);

// }