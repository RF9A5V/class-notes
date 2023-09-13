const { doubleEach, reverseEachWord } = require('../practice/map');

// Tests for doubleEach
test('Double each element', () => {
    expect(doubleEach([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
});

test('Double empty array', () => {
    expect(doubleEach([])).toEqual([]);
});

// Tests for reverseEachWord
test('Reverse each word in the array', () => {
    expect(reverseEachWord(['apple', 'banana'])).toEqual(['elppa', 'ananab']);
});

test('Reverse empty array of words', () => {
    expect(reverseEachWord([])).toEqual([]);
});
