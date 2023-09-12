// Basic arithmetic functions to be used as callbacks
// This function returns the sum of two numbers
function add(num1, num2) {
  return num1 + num2;
}

// This function returns the difference of two numbers
function subtract(num1, num2) {
  return num1 - num2;
}

// This function returns the product of two numbers
function multiply(num1, num2) {
  return num1 * num2;
}

// This function returns the quotient of two numbers
function divide(num1, num2) {
  return num1 / num2;
}

// A higher-order function: it accepts another function as its third argument
function calculator(num1, num2, operatorCallbackFunction) {
  // Logs the numbers and the operation about to be performed
  console.log("Getting ready to calculate the values of", num1, "and", num2);
  console.log("With function:", operatorCallbackFunction.name);

  // Invokes the passed-in callback function with num1 and num2
  const result = operatorCallbackFunction(num1, num2);
  
  console.log("Done! Your answer will be returned shortly!");
  return result;
}

// Testing the calculator function with the arithmetic callbacks
console.log(calculator(1, 1, add));       // Should log: 2
console.log(calculator(5, 4, subtract));  // Should log: 1
console.log(calculator(2, 2, multiply));  // Should log: 4
console.log(calculator(100, 10, divide)); // Should log: 10


// Higher-order function that returns a specific logger function based on the provided level
function createLogger(level) {
  // Returns a new function based on the provided level
  return function(message) {
    // Check the logging level and log the message with an appropriate prefix
    switch (level) {
      case "info":
        console.log(`[INFO]: ${message}`);
        break;
      case "warning":
        console.warn(`[WARNING]: ${message}`);
        break;
      case "error":
        console.error(`[ERROR]: ${message}`);
        break;
      default:
        console.log(message);
    }
  };
}

// Creating logger functions for different levels using the createLogger higher-order function
const infoLogger = createLogger("info");
const warningLogger = createLogger("warning");
const errorLogger = createLogger("error");

// Using the logger functions to log messages with different levels of importance
infoLogger("This is an info message.");   // Should log with [INFO] prefix
warningLogger("This is a warning.");      // Should log with [WARNING] prefix
errorLogger("Oops! Something went wrong."); // Should log with [ERROR] prefix
