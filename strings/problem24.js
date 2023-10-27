/*Write a JavaScript function to truncate a string to a certain number of words.
Test Data :
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
Output :
"The quick brown fox"
 */



function truncate(input,count) {
    let splitted= input.split(' ');
    let arr=[]
    for(let i=0;i<count;i++){
        arr.push(splitted[i])
    }
    
    return arr.join(' ')
}
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
