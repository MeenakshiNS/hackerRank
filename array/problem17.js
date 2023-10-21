/*
Write a JavaScript program to shuffle an array.
 */

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i (inclusive)
      const j = Math.floor(Math.random() * (i + 1));
      
      // Swap elements at i and j
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // Example usage:
  const myArray = [1, 2, 3, 4, 5];
  shuffleArray(myArray);
  console.log(myArray); // Output: A shuffled version of myArray
  