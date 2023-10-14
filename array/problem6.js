// Write a JavaScript program that accepts a number as input
// and inserts dashes (-) 
//between each even number.
// For example if you accept 025468 the output should be 0-254-6-8.

function insertDash(number){
   let result=''
    for(let i=0;i<number.length;i++){
        if(number[i]%2===0 && number[i+1]%2===0){
            result+=number[i] + '-' + number[i+1]
            i++;
        }else{
            result+=number[i];
        }
    }
    return result;
    

}
let output=insertDash('025468');
console.log(output);

/*take away 
 we can write a number a string into the functions argument
 and can perform operations as if its a number
*/