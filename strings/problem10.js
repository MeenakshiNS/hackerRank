/*. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter.
 It converts upper case letters to lower case, and lower case letters to upper case.
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"
 */

function swapcase(input){
    let str="";
    for(let i=0;i<input.length;i++){
        if(input[i]===input[i].toUpperCase()){
            str+= input[i].toLowerCase()
        }else{
            str+= input[i].toUpperCase()
        }
    }
    return str
}
console.log(swapcase('AaBbc'));
