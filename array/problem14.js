// 👺 DOUBT
// /*
// Write a JavaScript program to remove duplicate items
//  from an array (ignore case sensitivity).
// */
// function removeDuplicates(array){
//     let uniqueElments=[];
//     for(let i=0;i<array.length;i++){
//         for(let j=0;j<uniqueElments.length;j++){
//             if(array[i]===uniqueElments[j]){
//                 continue;
//             }else{
//                 uniqueElments.push(array[i]);
               
//             }

//         }

//     }
//     console.log(uniqueElments);



// }
// removeDuplicates([1,2,4,2,6,4,8,1]);


function removeDuplicates(array) {
    let uniqueElements = [];
    for (let i = 0; i < array.length; i++) {
        let isUnique = true;
        for (let j = 0; j < uniqueElements.length; j++) {
            if (array[i] === uniqueElements[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            uniqueElements.push(array[i]);
        }
    }
    console.log(uniqueElements);
}

removeDuplicates([1, 2, 4, 2, 6, 4, 8, 1]);
