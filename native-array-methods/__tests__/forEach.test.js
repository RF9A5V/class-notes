const { incrementEach, convertToUppercase } = require('../practice/forEach');

// Tests for incrementEach
test('Increment each element by 2', () => {
    expect(incrementEach([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5, 6, 7]);
});

test('Increment each element by -1', () => {
    expect(incrementEach([1, 2, 3, 4, 5], -1)).toEqual([0, 1, 2, 3, 4]);
});

test('Empty array for incrementing', () => {
    expect(incrementEach([], 2)).toEqual([]);
});

// Tests for convertToUppercase
test('Convert array of words to uppercase', () => {
    expect(convertToUppercase(['apple', 'banana'])).toEqual(['APPLE', 'BANANA']);
});

test('Empty array for uppercase conversion', () => {
    expect(convertToUppercase([])).toEqual([]);
});
