/*
Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno
*/

function obj(objt) {
  for (let key in objt) {
    console.log(key);
  }
}
obj({
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
});
