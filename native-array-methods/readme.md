# JavaScript Array Methods Cheat Sheet

This cheat sheet summarizes the use of JavaScript's higher-order native array methods.

## Programming Principles:
1. **DRY (Don't Repeat Yourself)**: Avoid duplicating code.
2. **KISS (Keep It Simple, Stupid)**: Keep code simple and understandable.
3. **YAGNI (You Ain't Gonna Need It)**: Don't add functionality until it's necessary.

## Higher-order Array Methods:

### 1. **`map()`**:
Transforms an array into a new array by applying a function to each of its elements.
```javascript
const newArray = array.map(element => `New ${element}`);
```

### 2. **`every()`**:
Checks if all elements of an array satisfy a test.
```javascript
const allGreaterOrEqualOne = nums.every(num => num >= 1);
const allShorterThanSix = pangram.every(word => word.length < 6);
```

### 3. **`filter()`**:
Creates a new array with all elements that pass a test.
```javascript
const lessThanThree = nums.filter(num => num < 3);
const evenLengthWords = pangram.filter(word => word.length % 2 === 0);
```

### 4. **`find()`**:
Returns the first element in an array that satisfies a test.
```javascript
const divisibleByFour = nums.find(num => num % 4 === 0);
const longerThanFive = pangram.find(word => word.length > 5);
```

### 5. **`findIndex()`**:
Returns the index of the first element that satisfies a test.
```javascript
const divisibleByThreeIndex = nums.findIndex(num => num % 3 === 0);
const twoOrLessCharactersIndex = pangram.findIndex(word => word.length <= 2);
```

### 6. **`forEach()`**:
Executes a function on each element of an array.
```javascript
nums.forEach(num => console.log(num * 10));
pangram.forEach(word => console.log(`${word}?`));
```

### 7. **`some()`**:
Checks if at least one element in an array satisfies a test.
```javascript
const hasDivisibleBySix = nums.some(num => num % 6 === 0);
const hasLetterI = pangram.some(word => word.includes('i'));
```

### 8. **`reduce()`**:
Applies a function against an accumulator to each element in the array (from left to right) to reduce it to a single value.
```javascript
const total = nums.reduce((sum, num) => sum + num, 0);
const concatenatedWords = pangram.reduce((acc, word) => acc + word, "");
```

### 9. **`sort()`**:
Sorts the elements of an array in-place.
```javascript
const ascendingNumbers = [...nums].sort((a, b) => a - b);
const descendingNumbers = [...nums].sort((a, b) => b - a);
const ascendingWords = [...pangram].sort();
const descendingWords = [...pangram].sort().reverse();
```

**Note**: Using the spread syntax (`...array`) creates a shallow copy of the array, preventing mutation of the original array during sorting.

## Thought Answers:
1. **What happened to the original array?** Most of these methods do not mutate the original array. However, methods like `sort()` do mutate the original array unless a copy is made.
2. **Can you store the values from a `forEach` method in a new array?** No, the `forEach` method doesn't return a new array. Instead, use the `map()` method if you want to store transformed values in a new array.

Remember, each of these methods has a specific use-case. Always choose the method that's most appropriate for the operation you're trying to perform on your array.