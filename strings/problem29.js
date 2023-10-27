/*Write a JavaScript function to find a word within a string.
Test Data :
console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
Output :
"'fox' was found 1 times."
"'aa' was found 2 times."
 */
function search_word(input, word) {
  let change = input.replaceAll(",", " ");
  let splitted = change.split(" ");
    let count = 0;
    for (let i = 0; i < splitted.length; i++) {
      if (splitted[i] === word) {
        count++;
      }
    }
        
     return `${word} was found ${count} times.`;
}
console.log(search_word("The quick brown fox", "fox"));
console.log(search_word("aa, bb, cc, dd, aa", "aa"));
