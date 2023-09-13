const { hasEvenNumber, hasWordLongerThan } = require('../practice/some');

// Tests for hasEvenNumber
test('Check if array has an even number', () => {
    expect(hasEvenNumber([1, 3, 5, 6])).toBe(true);
});

test('Array without even numbers', () => {
    expect(hasEvenNumber([1, 3, 5, 7])).toBe(false);
});

test('Empty array for even check', () => {
    expect(hasEvenNumber([])).toBe(false);
});

// Tests for hasWordLongerThan
test('Check if array has a word longer than 3 characters', () => {
    expect(hasWordLongerThan(['one', 'two', 'three'], 3)).toBe(true);
});

test('Array without words longer than 3 characters', () => {
    expect(hasWordLongerThan(['one', 'two'], 3)).toBe(false);
});

test('Empty array for word length check', () => {
    expect(hasWordLongerThan([], 3)).toBe(false);
});
