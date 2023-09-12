/**
 * Processes an array by applying a provided callback function to each element.
 * @param {number[]} array - The array of numbers to be processed.
 * @param {Function} callback - A function that processes a number and returns a number.
 * @returns {number[]} A new array containing the results of processing each element of the input array.
 */
function processArray(array, callback) {
  // TODO: Implement this function
  return [];
}

/**
 * Creates a customized greeting function.
 * @param {string} greeting - The greeting to be used.
 * @returns {Function} A function that, when called with a name, prints out a customized greeting message.
 */
function greetMaker(greeting) {
  // TODO: Implement this function
  return function(name) {
    console.log("Your greeting goes here!");
  };
}

// Sample Usage for processArray
const doubledArray = processArray([1, 2, 3, 4], num => num * 2);
console.log(doubledArray); // Expected output: [2, 4, 6, 8]

// Sample Usage for greetMaker
const helloGreeter = greetMaker("Hello");
helloGreeter("Alice");  // Expected output: "Hello, Alice!"
helloGreeter("Bob");    // Expected output: "Hello, Bob!"
