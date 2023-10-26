/*Write a JavaScript function to convert a string into abbreviated form.
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."
 */

function abbrev_name(input){
   let splittedName= input.trim().split(" ") //["Robin","Singh"]
   return splittedName[0]+" "+splittedName[1].charAt(0)+"."
}
console.log(abbrev_name("Robin Singh"));