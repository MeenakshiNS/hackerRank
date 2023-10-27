/*11. Write a JavaScript function to convert a string into camel case.(doubt👺)
Test Data :
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
"JavaScriptExercises"
"JavaScriptExercises"
"JavaScriptExercises"
 */

// function camelize(input){
//     let splitted=input.trim().split(" ");
//     return splitted[0] + splitted[1].charAt(0).toUpperCase()+splitted[1].slice(1)
     
// }

// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));

camelize = function camelize(str) {
    return str.replace(/\W+(.)/g, function(match, chr)
     {
          return chr.toUpperCase();
      });
  }

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));

//make note on regular expression


