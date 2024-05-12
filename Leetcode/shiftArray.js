var arr = [5, 4, 7, 3, 8];
var shift = 3;

function arrShift(arr,shift)
{
    var n = arr.length;
    var left = arr.slice(0, shift);
    console.log(left);
    var right = arr.slice(shift, n);
    console.log(right);

    for(let i = 0 ; i < right.length; i++) //works
    {
        arr[i] = right[i];
    }
    var j = 0;
    for(let i = right.length ; i < n; i++)
    {
        
        arr[i] = left[j];
        j+=1;
    }
    return arr;
}
console.log("hello");

console.log(arrShift(arr,shift));

