// Define an array of numbers
const numbers = [34, 7, 23, 1, 89, 2];

// Use the .sort() method to sort the numbers in ascending order
// The .sort() method, without a callback function, sorts elements as strings by default, which might produce unexpected results for numbers
// Therefore, for numerical sorting, we provide a callback function
const sortedNumbers = numbers.sort((a, b) => a - b);

// Log the sorted array to the console
console.log(sortedNumbers); // This will print "[1, 2, 7, 23, 34, 89]"
