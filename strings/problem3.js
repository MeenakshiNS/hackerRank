/*
Write a JavaScript function to split a string and convert it into an array of words.
Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]
 */

function string_to_array(str){
    console.log(str.trim());
    console.log(str.split(" "));//splitting based on space.
  
}
// console.log(string_to_array("Robin Singh"));

string_to_array("ROBIN singh")

//note
/*
string.split(separator, limit)
split convert string to array

*/