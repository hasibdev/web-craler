const { sum, normalizeURL } = require('./utils.js');
const { test, expect, describe } = require('@jest/globals');

describe('sum module', () => {
  test('2+2 to equal 4', () => {
    const inputA = 2;
    const inputB = 2;
    const result = sum(inputA, inputB);
    const expected = 4;

    expect(result).toBe(expected);
  });
  test('5+5 to equal 10', () => {
    const inputA = 5;
    const inputB = 5;
    const result = sum(inputA, inputB);
    const expected = 10;

    expect(result).toBe(expected);
  });
});

describe('normalize URL', () => {
  test('check protocol', () => {
    const input = 'https://hasib.dev/about/';
    const result = normalizeURL(input);
    const expected = 'hasib.dev/about';

    expect(result).toEqual(expected);
  });
  test('check query', () => {
    const input = 'https://hasib.dev/about?id=2';
    const result = normalizeURL(input);
    const expected = 'hasib.dev/about';

    expect(result).toEqual(expected);
  });
  test('check www', () => {
    const input = 'https://www.hasib.dev/about?id=2';
    const result = normalizeURL(input);
    const expected = 'hasib.dev/about';

    expect(result).toEqual(expected);
  });
});
