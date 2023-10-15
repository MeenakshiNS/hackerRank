/*
Write a JavaScript program to find the sum of squares of a numerical vector.
note:numerical vector means array of numbers
 */

function sum_of_sqaures(array){
    let sumOfSquares=0
    for(let i=0;i<array.length;i++){
        sumOfSquares+=array[i]*array[i];

    }
    console.log(`sum of squares of numerical vectors=${sumOfSquares}`);

}
sum_of_sqaures([1, 2, 3, 4, 5])