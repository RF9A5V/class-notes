// Higher Order Functions Cheat Sheet

// Definitions:
// 1. Higher-order function:
// A function that returns a function or expects a function as one of its parameters.

// 2. Callback function:
// The function that is passed as a parameter to another function.

// Anonymous functions are useful for higher-order functions because:
// - They can be defined inline.
// - They are typically used once (not reused).
// - They keep the code concise.

// Examples:
// - Functions `truthy` and `falsy` are NOT higher-order functions as they don't accept or return functions.
function truthy() {
  return true;
}

function falsy() {
  return !truthy();
}

// - Function `go` is a higher-order function because it returns a function.
function left() {
  return "Left";
}

function right() {
  return "Right";
}

function go(goLeft = true) {
  if (goLeft === true) {
    return left;
  } else {
    return right;
  }
}

// - Function `go` in the following example is a higher-order function as it accepts a function (operation) as an argument.
const directions = [];

function storeDirections(direction) {
  directions.push(direction);
}

function go(direction, operation) {
  operation(direction);
  return direction;
}

// - Function `transform` is a higher-order function because it accepts a function (fn) as its second argument.
function transform(text, fn) {
  if (typeof fn !== "function") {
    return text;
  }

  return fn(text);
}

// Transform text using anonymous functions:
console.log(transform("left", text => text.toUpperCase()));
console.log(transform("RiGhT", text => text.toLowerCase()));
console.log(transform("left right left", text => text.replace(/\s/g, "-")));
console.log(transform("up Down left", text => {
  const initials = text.split(' ').map(word => word[0].toUpperCase()).join('');
  return initials;
}));
