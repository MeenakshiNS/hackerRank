/*
Write a JavaScript function to chop a string into chunks of a given length.
Test Data :
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
["w3resource"]
["w3", "re", "so", "ur", "ce"]
["w3r", "eso", "urc", "e"]
 */

function string_chop(input, count ) {
    if (count ===undefined) {
        return [input]; // If count is less than or equal to 0, return the entire string as a single chunk.
    }

    const chunks = [];
    for (let i = 0; i < input.length; i += count) {
        chunks.push(input.slice(i, i + count));
    }

    return chunks;
}

console.log(string_chop('w3resource'));
console.log(string_chop('w3resource', 2));
console.log(string_chop('w3resource', 3));

