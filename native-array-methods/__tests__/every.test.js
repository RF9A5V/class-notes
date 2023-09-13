const { areAllPositive, areAllOfLength } = require('../practice/every');

test('All elements are positive', () => {
    expect(areAllPositive([1, 2, 3, 4, 5])).toBe(true);
});

test('One element is negative', () => {
    expect(areAllPositive([-1, 2, 3, 4, 5])).toBe(false);
});

test('Empty array', () => {
    expect(areAllPositive([])).toBe(true);
});

test('All strings are of length 3', () => {
    expect(areAllOfLength(['one', 'two', 'red'], 3)).toBe(true);
});

test('One string is not of length 3', () => {
    expect(areAllOfLength(['one', 'three', 'red'], 3)).toBe(false);
});

test('Empty array', () => {
    expect(areAllOfLength([], 3)).toBe(true);
});
