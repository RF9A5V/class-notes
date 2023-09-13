const { sortDescending, sortByLength } = require('../practice/sort');

// Tests for sortDescending
test('Sort numbers in descending order', () => {
    expect(sortDescending([1, 3, 5, 2, 4])).toEqual([5, 4, 3, 2, 1]);
});

test('Sort empty array', () => {
    expect(sortDescending([])).toEqual([]);
});

// Tests for sortByLength
test('Sort words by length', () => {
    expect(sortByLength(['apple', 'kiwi', 'banana', 'grape'])).toEqual(['kiwi', 'apple', 'grape', 'banana']);
});

test('Sort empty array of words', () => {
    expect(sortByLength([])).toEqual([]);
});
