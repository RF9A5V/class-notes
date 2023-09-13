// Define an array of numbers
const numbers = [1, 3, 5, 8, 9, 11];

// Use the .findIndex() method to locate the index of the first even number in the array
// The .findIndex() method goes through each number in the array and applies the given callback function
// It will return the index of the first number for which the callback function returns true
// If no number satisfies the criteria, .findIndex() will return -1
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);

// Log the found index to the console
console.log(firstEvenIndex); // This will print "3" since the index of the first even number (8) in the array is 3
