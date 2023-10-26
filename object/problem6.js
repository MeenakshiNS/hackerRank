/*  imp 👻
Write a JavaScript program that returns a subset of a string.
Sample Data: dog
Expected Output: ["d", "do", "dog", "o", "og", "g"]
 */

/*
Approach:
========

Define a function that takes the input string as an argument.

Initialize an empty array to store the subsets.

Use nested loops to iterate through the characters in the string. The outer loop selects the starting index of a subset, and the inner loop selects the ending index.

Extract the substring between the selected starting and ending indices.

Add the extracted substring to the array of subsets.

Continue this process for all possible starting and ending index combinations.

Finally, return the array of subsets.

*/

function getSubset(name){
    let subsets=[];
    for(let i=0;i<name.length;i++){
        for( j=i+1;j<=name.length;j++){
            let subset=name.substring(i,j);
            subsets.push(subset)
        }
    }
    return subsets;

}

console.log(getSubset("dog"));