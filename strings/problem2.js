/*Write a JavaScript function to check whether a string is blank or not.
Test Data :
console.log(is_Blank(''));
console.log(is_Blank('abc'));
true
false
 */

function is_Blank(input){
    if(input===''){
        return 'blank'
    }else{
        return 'not blank'
    }
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));


