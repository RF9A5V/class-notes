const { findFirstNegative, findWordLongerThan } = require('../practice/find');

// Tests for findFirstNegative
test('Find the first negative number', () => {
    expect(findFirstNegative([1, 2, 3, -4, 5, 6])).toBe(-4);
});

test('No negative numbers in array', () => {
    expect(findFirstNegative([1, 2, 3, 4])).toBeUndefined();
});

test('Empty array for negative search', () => {
    expect(findFirstNegative([])).toBeUndefined();
});

// Tests for findWordLongerThan
test('Find the first word longer than 3 characters', () => {
    expect(findWordLongerThan(['one', 'two', 'three', 'four'], 3)).toBe('three');
});

test('No words longer than 3 characters in array', () => {
    expect(findWordLongerThan(['one', 'two'], 3)).toBeUndefined();
});

test('Empty array for word search', () => {
    expect(findWordLongerThan([], 3)).toBeUndefined();
});
