const { filterOutEvens, filterOutWordsStartingWithA } = require('../practice/filter');

// Tests for filterOutEvens
test('Filter out even numbers', () => {
    expect(filterOutEvens([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5]);
});

test('No even numbers in array', () => {
    expect(filterOutEvens([1, 3, 5, 7])).toEqual([1, 3, 5, 7]);
});

test('Empty array for even filter', () => {
    expect(filterOutEvens([])).toEqual([]);
});

// Tests for filterOutWordsStartingWithA
test('Filter out words starting with "a"', () => {
    expect(filterOutWordsStartingWithA(['apple', 'banana', 'avocado', 'cherry'])).toEqual(['banana', 'cherry']);
});

test('No words starting with "a" in array', () => {
    expect(filterOutWordsStartingWithA(['banana', 'cherry'])).toEqual(['banana', 'cherry']);
});

test('Empty array for word filter', () => {
    expect(filterOutWordsStartingWithA([])).toEqual([]);
});
