# Higher Order Functions Cheat Sheet

## Learning Objectives

- Define what makes a higher-order function.
- Define what makes a callback function.
- Write functions that accept a function as an argument and use that inputted function.

---

## Key Points

- **Higher-Order Function**: Any function that returns a function or expects a function as one of its parameters.

- **Callback Function**: The function that is passed as a parameter to another function. It's often used in conjunction with higher-order functions.

- **Anonymous Functions**: Useful when you only need a function once. It doesn't have a name, e.g., `() => { console.log("I'm anonymous!"); }`.

## Examples

**Example 1**:

```js
function truthy() {
  return true;
}

function falsy() {
  return !truthy();
}

falsy(); //> false
```
This doesn't contain any higher-order functions.

**Example 2**:

```js
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
```
Here, `go()` is a higher-order function because it returns another function (`left` or `right`).

**Example 3**:

```js
const directions = [];

function storeDirections(direction) {
  directions.push(direction);
}

function go(direction, operation) {
  operation(direction);
  return direction;
}

go("Left", storeDirections);
go("Right", storeDirections);
go("Up", storeDirections);
console.log(directions); //> ["Left", "Right", "Up"]
```
Here, `go()` is a higher-order function because it takes a function (`storeDirections`) as its parameter.

**Example 4**:

```js
function transform(text, fn) {
  if (typeof fn !== "function") {
    return text;
  }

  return fn(text);
}
```
This `transform` function is a higher-order function, as it takes a function `fn` as an argument.
