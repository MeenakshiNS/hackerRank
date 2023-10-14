// 2. Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

function ArrayClone(input){
    return [...input];
    // return input.slice();

}
console.log(ArrayClone([1, 2, 4, 0]));
console.log(ArrayClone([1, 2, [4, 0]]));


//or we can also use slice,slice will not mutate the original array