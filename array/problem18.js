/*
 There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]
 */

//🤧 doubt

function individual_index_sum(array1,array2){

    let i=0,sum=[];
    if (i<array1.length && i<array2.length) {
        sum=array1[i]+array2[i]
        i++;
    }else{
        sum.push(array1[i]) || sum.push(array2[i])
    }
    console.log(sum);

}
individual_index_sum([1,0,2,3,4] ,[3,5,6,7,8,13]);