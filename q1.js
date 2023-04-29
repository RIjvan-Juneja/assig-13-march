/*
1.Count the occurrences.
You are building a word count generator that will take a large string of text as input and output the words and
the number of times they are present in the string. Your task is to write a function that can count the
occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
assume that the string only contains alphabetic characters and spaces.
*/


const text = "This is a test. This is only a test.";

// Define the word count function
function wordCount(text) {
  // Split the text into an array of words
  const words = text.split(" ");

  // Create an empty Map to store the word counts
  const wordCountMap = new Map();

  // Loop over each word in the array
  for (const word of words) {
    // If the word is already in the Map, increment its count
    if (wordCountMap.has(word)) {
      wordCountMap.set(word, wordCountMap.get(word) + 1);
    } else {
      // Otherwise, add the word to the Map with a count of 1
      wordCountMap.set(word, 1);
    }
  }

  // Return the Map containing the word counts
  return wordCountMap;
}

// Call the word count function and output the results to the console
const counts = wordCount(text);
console.log(counts);
