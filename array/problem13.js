
// 👺👺doubt
/*Write a JavaScript program to add items to a blank array and display them.
Sample Screen :
add elements in an blank array
*/

function add_elements_to_blank_array(array) {
  let blankArray = [0];
  for (let i = 0; i < array.length; i++) {
   return blankArray[i] += array[i];
  }
}

console.log(add_elements_to_blank_array([1, 2, 3]));
