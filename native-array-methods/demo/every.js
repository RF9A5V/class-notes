// Define an array of numbers
const numbers = [2, 4, 6, 8, 10];

// Use the .every() method to check if all numbers in the array are even
// The .every() method will loop through each number in the array and apply the callback function
// If all numbers return true for the condition (num % 2 === 0), then .every() will return true
// If at least one number does not meet the condition, .every() will return false
const allEven = numbers.every(num => num % 2 === 0);

// Log the result to the console
console.log(allEven); // This will print "true" because all numbers in the array are even
