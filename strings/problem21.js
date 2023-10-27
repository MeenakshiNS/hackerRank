/*. Write a JavaScript function to repeat a string for a specified time.
Test Data :
console.log(repeat_string('a', 4));
console.log(repeat_string('a'));
Output :
"aaaa"
"Error in string or count."
 */

function repeat_string(input,count){
    if(count===undefined){
        return 'Error in string or count.'
    }else{
        return input.repeat(count)
    }
    
}
console.log(repeat_string('a', 4));
console.log(repeat_string('a'));