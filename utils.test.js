const { sum, normalizeURL } = require('./utils.js');
const { test, expect, describe } = require('@jest/globals');

describe('sum module', () => {
  test('1+3 to equal 4', () => {
    const inputA = 2;
    const inputB = 2;
    const result = sum(inputA, inputB);
    const expected = 4;

    expect(result).toBe(expected);
  });
});

describe('normalize URL', () => {
  test('normalize url', () => {
    const input = 'https://hasib.dev/about';
    const result = normalizeURL(input);
    const expected = 'hasib.dev/about';

    expect(result).toEqual(expected);
  });
});
