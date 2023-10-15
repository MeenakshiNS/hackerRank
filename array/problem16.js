/*
Write a JavaScript program to find the leap years in a given range of years.

leap year means that year will the divisible by 4
*/

function leapYear(array_of_leapyear){
let output=[]

for(let i=0 ;i<array_of_leapyear.length;i++){
    if(array_of_leapyear[i]%4===0){
        output.push(array_of_leapyear[i])
    }
}
console.log(output);
}

leapYear([2016,2000,1998])