/* imp 🥶
Write a JavaScript function to capitalize the first letter of each word in a string.
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"
 */
function capitalize_Words(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
console.log(capitalize_Words("js string exercises"));

/*

NOTE:

regular expression

The / Is the beginning of a regex (regular expression). 
The \w looks for all word characters in a string.
 A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character.
  Now the \S is any character that is NOT a whitespace character. 
  You were confusing it with \s(lowercase) which is for whitespace characters.
   The * is a character that says to look for n zero or more times, where n is the metacharacter(the backslash tokens in the regex) in the regex.

*/
