let arr=[];
let sum=0;
function iterArr(arr) {
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
iterArr([1,2,5]);
iterArr([-5,2,5,12]);
iterArr([0]);