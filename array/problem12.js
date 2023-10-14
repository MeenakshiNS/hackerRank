/*
Write a JavaScript program 
to compute the sum and product 
of an array of integers.
 */

function sum_product(arrayOfIntegers) {
  const sum = arrayOfIntegers.reduce((a, c) => (a += c));
  let product=1;
  for(let i=0;i<arrayOfIntegers.length;i++){
    product*=arrayOfIntegers[i]
  }
  console.log(`sum of array of integers = ${sum}`);
  console.log(`product of array of integers = ${product}`);
}
let output = sum_product([10, 20, 30, 10]);

/*take away
it we give cont to product =1 
the when the loop start to run it will throw error 
becaz we cannot change a const variable.
so assign it with let

*/
