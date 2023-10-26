/* Write a JavaScript function to capitalize the first letter of a string.
Test Data :
console.log(('js string exercises'));
"Js string exercises"
 */
function capitalize(input) {
 
  return input[0].toUpperCase()+input.slice(1);
  
}
console.log(capitalize('js string exercises'));

