// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use the .map() method to create a new array where each number is doubled
// The .map() method iterates over each element in the array and applies the provided callback function
// It then returns a new array with the results of applying that function
const doubledNumbers = numbers.map(num => num * 2);

// Log the new array to the console
console.log(doubledNumbers); // This will print "[2, 4, 6, 8, 10]"
