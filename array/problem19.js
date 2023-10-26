//dbt 👺

/*Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
Sample Data :
console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
[1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
[1, 2, 3, [[4]], 5, 6]
*/


function union(arra1, arra2) {
  
    if ((arra1 == null) || (arra2==null)) 
      return void 0;
    
    let obj = {};
   
    for (let i = arra1.length-1; i >= 0;  i--)
       obj[arra1[i]] = arra1[i];
   
    for (let i = arra2.length-1; i >= 0;  i--)
       obj[arra2[i]] = arra2[i];
   
    let res = [];
   
    for (let n in obj)
    {
    
      if (obj.hasOwnProperty(n)) 
        res.push(obj[n]);
    }
   
    return res;
  }
  console.log(union([1, 2, 3], [100, 2, 1, 10]));
  