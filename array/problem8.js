// Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )


//👺doubt
function mostFrequentItem(array){
    let frequency=[];
    for(let i=0;i<array.length;i++){
         frequency[i]=1;
        for(let j=i+1; j<array.length;j++){
            if(array[i]===array[j] && frequency[j]!==0 && frequency[i]!==0){
                frequency[j]=0;

                frequency[i]++;
            }


        }
        if(frequency[i]!==0)
        console.log(`${array[i]} occur ${frequency[i]}times`);


    }


}

mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])