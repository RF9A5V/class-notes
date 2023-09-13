// Define an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the .filter() method to extract all even numbers from the array
// The .filter() method iterates over each number in the array and applies the provided callback function
// If the callback function returns true for a number, that number is included in the resulting array
// In this case, only even numbers (where num % 2 === 0 is true) will be included in the result
const evenNumbers = numbers.filter(num => num % 2 === 0);

// Log the filtered array to the console
console.log(evenNumbers); // This will print "[2, 4, 6, 8, 10]" since these are the even numbers from the original array
