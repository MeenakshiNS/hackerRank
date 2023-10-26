/*Write a JavaScript function that hides email addresses to prevent unauthorized access.
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
 */

function protect_email(mail){
   const splitted=  mail.split('@')  //[ 'robin_singh', 'example.com' ] 
    const part1= splitted[0] //'robin_singh'
    const part2=splitted[1]   //'example.com'
     const avg= part1.length/2 //5.5

     let part=part1.substring(0,avg);  //robin
     return part+'...@'+part2
}

console.log(protect_email("robin_singh@example.com"));


/*note

 //@vech split cheythal @pokum
 
 */
