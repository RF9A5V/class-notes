const { findIndexOfFirstNegative, findIndexOfWordLongerThan } = require('../practice/findIndex');

// Tests for findIndexOfFirstNegative
test('Find the index of the first negative number', () => {
    expect(findIndexOfFirstNegative([1, 2, 3, -4, 5, 6])).toBe(3);
});

test('No negative numbers in array', () => {
    expect(findIndexOfFirstNegative([1, 2, 3, 4])).toBe(-1);
});

test('Empty array for negative index search', () => {
    expect(findIndexOfFirstNegative([])).toBe(-1);
});

// Tests for findIndexOfWordLongerThan
test('Find the index of the first word longer than 3 characters', () => {
    expect(findIndexOfWordLongerThan(['one', 'two', 'three', 'four'], 3)).toBe(2);
});

test('No words longer than 3 characters in array', () => {
    expect(findIndexOfWordLongerThan(['one', 'two'], 3)).toBe(-1);
});

test('Empty array for word index search', () => {
    expect(findIndexOfWordLongerThan([], 3)).toBe(-1);
});
