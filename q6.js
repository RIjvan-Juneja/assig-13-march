/* Write a function that takes an object representing a person as input, and extracts the name and street
properties from a nested object using object destructuring. The function should return an object with these two
properties.*/

function extractNameAndStreet({ address: { street }, name }) {
    return { name, street };
  }
  const person = {
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    }
  };
  const result = extractNameAndStreet(person);
  console.log(result); 
  
  // Output: { name: 'John Doe', street: '123 Main St' }
    