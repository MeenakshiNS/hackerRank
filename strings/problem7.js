/*Write a JavaScript function to parameterize a string.
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"
 */

function string_parameterize(input) {
    return input.toLowerCase().replaceAll(" ","-")
    
}
console.log(string_parameterize("Robin Singh from USA."));
