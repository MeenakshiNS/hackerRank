/*
Write a JavaScript function that checks whether a string ends with a specified suffix.
Test Data :
console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
true
console.log(string_endsWith('JS PHP PYTHON',''));
 */





function string_endsWith(input,word){
    return input.endsWith(word)
}

console.log(string_endsWith('JS PHP PYTHON','i'));
console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
