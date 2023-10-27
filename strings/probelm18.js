/*Write a JavaScript function to count substrings in a string.
Test Data :
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
Output :
2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
Output :
1
 */


function count(input,word){
    const lower= input.toLowerCase();
    let count=0;
    const splitted=lower.trim().split(' ')
    for(let i=0;i<splitted.length;i++){
        if(splitted[i]===word){
            count++;
        }
    }
    return count
}
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox'));

