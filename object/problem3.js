/*Write a JavaScript program to get the length of a JavaScript object.
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
 */


// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };

//     let size=0;
//     for(let key in student){
//         size++;
//     }
//     console.log(size);


    function lengthOfObj(obj){
        let size=0;
        for(let key in student){
            size++;
        }
        return size

    }

    var student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 };

    console.log(lengthOfObj(student));