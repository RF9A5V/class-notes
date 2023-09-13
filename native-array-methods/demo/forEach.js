// Define an array of fruits
const fruits = ["apple", "banana", "cherry", "date"];

// Use the .forEach() method to iterate over each fruit in the array
// The .forEach() method goes through each element in the array and executes the provided callback function for each element
// In this case, we'll simply log each fruit to the console
fruits.forEach(fruit => {
    // Inside the callback, we can access each individual fruit
    // Here, we're just printing each fruit out with some added text
    console.log(`I like ${fruit}!`);
});

// Expected console output:
// "I like apple!"
// "I like banana!"
// "I like cherry!"
// "I like date!"
