/* 👺👺 */
/*Write a JavaScript program to add items to a blank array and display them.
Sample Screen :
add elements in an blank array
*/

function add_elements_to_blank_array(array) {
  let blankArray = [];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  
  // console.log(sum);

   blankArray.push(sum);
   return blankArray;      /*this is how we push a value into array */
}

console.log(add_elements_to_blank_array([1, 2, 3]));
