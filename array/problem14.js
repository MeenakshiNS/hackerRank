/* 👺 */

function removeDuplicates(array) {
    let uniqueElements = [];
    for (let i = 0; i < array.length; i++) {
        let isUnique = true;
        for (let j = 0; j < uniqueElements.length; j++) {
            if (array[i] === uniqueElements[j]) {
                isUnique = false;
                 continue;
                
            }
        }
        if (isUnique) {
            uniqueElements.push(array[i]);
        }
    }
    console.log(uniqueElements);
}

removeDuplicates([1, 2, 4, 2, 6, 4, 8, 1]);
