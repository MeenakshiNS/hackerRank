/*

 Write a JavaScript program to delete the rollno property from the following object. 
 Also print the object before or after deleting the property.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

*/

function deleteRollno(obj){
    console.log(obj);
    delete obj.rollno;

   return obj;

}

let  student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
console.log(deleteRollno(student));