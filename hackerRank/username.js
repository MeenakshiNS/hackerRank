// function username(name) {
//   for (let i = 0; i < name.length; i++) {
//     for(let j=i+1;j<name.length;j++){
//     if (name.charCodeAt(i) > name.charCodeAt(j)   ) {
//       return "yes"
    
//     }else if(name.charCodeAt(i)<name.charCodeAt(j)){
//         continue;

//     }
    
//     else {
//      return "NO"
//     }
//   }
// }
// }
//  console.log(username("meenu"));


// for (let i = 0; i < str.length; i++) {
//  let char = str.charAt(i);
//  let charCode = char.charCodeAt(0);

//  console.log("Character: " + char + ", Character Code: " + charCode);
// }

//doubt
function username(name) {
    let result=[];
    for (let i = 0; i < name.length; i++) {
      for(let j=i+1;j<name.length;j++){
      if (name[i].charCodeAt(0) > name[j].charCodeAt(0)   ) {
         result.push("yes")
      
      }else if(name[i].charCodeAt(0)<name[j].charCodeAt(0)){
          continue;
  
      }
      
      else {
       result.push("no")
      }
    }
  }
  }
console.log(username(["foo","bass","meenu"]));
