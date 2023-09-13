// Define an array of numbers
const numbers = [1, 3, 5, 8, 9, 11];

// Use the .find() method to locate the first even number in the array
// The .find() method iterates over each number in the array and applies the provided callback function
// It will return the first number for which the callback function returns true
// If no number meets the criteria, .find() will return undefined
const firstEven = numbers.find(num => num % 2 === 0);

// Log the found number to the console
console.log(firstEven); // This will print "8" since it's the first even number in the array
