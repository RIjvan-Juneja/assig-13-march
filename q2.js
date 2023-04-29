/*
2. Only unique items are allowed.
You are building a program that takes an array of numbers as input and you need to remove all the duplicates
from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
contains only the unique elements.
*/


function removeDuplicates(numbers) {
    // Create a new Set object to store the unique numbers
    const uniqueNumbers = new Set();
  
    // Loop over each number in the array
    for (const number of numbers) {
      // Add the number to the Set if it's not already present
      if (!uniqueNumbers.has(number)) {
        uniqueNumbers.add(number);
      }
    }
  
    // Return the Set containing the unique numbers
    return uniqueNumbers;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
  const uniqueNumbers = removeDuplicates(numbers);
  console.log(uniqueNumbers); // Output: Set(5) { 1, 2, 3, 4, 5 }
  