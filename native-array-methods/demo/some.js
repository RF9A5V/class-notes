// Define an array of numbers
const numbers = [1, 3, 5, 7, 8, 11];

// Use the .some() method to check if any number in the array is even
// The .some() method loops through each number in the array and applies the given callback function
// It will return true if at least one number satisfies the condition in the callback function, otherwise it will return false
const hasEvenNumber = numbers.some(num => num % 2 === 0);

// Log the result to the console
console.log(hasEvenNumber); // This will print "true" since there's at least one even number (8) in the array
