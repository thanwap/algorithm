import * as utils from './utils';

test('isAlphaNumeric should return true on alphabet', () => {
  expect(utils.isAlphaNumeric('a')).toBe(true);
  expect(utils.isAlphaNumeric('j')).toBe(true);
  expect(utils.isAlphaNumeric('z')).toBe(true);
  expect(utils.isAlphaNumeric('A')).toBe(true);
  expect(utils.isAlphaNumeric('Z')).toBe(true);
  expect(utils.isAlphaNumeric('B')).toBe(true);
});

test('isAlphaNumeric should return true on number', () => {
  expect(utils.isAlphaNumeric(0)).toBe(true);
  expect(utils.isAlphaNumeric('0')).toBe(true);
  expect(utils.isAlphaNumeric('1')).toBe(true);
  expect(utils.isAlphaNumeric('2')).toBe(true);
  expect(utils.isAlphaNumeric('3')).toBe(true);
  expect(utils.isAlphaNumeric('4')).toBe(true);
  expect(utils.isAlphaNumeric('9')).toBe(true);
  expect(utils.isAlphaNumeric(9)).toBe(true);
});

test('isAlphaNumeric should return false on other', () => {
  expect(utils.isAlphaNumeric('%')).toBe(false);
  expect(utils.isAlphaNumeric(' ')).toBe(false);
  expect(utils.isAlphaNumeric('.')).toBe(false);
});

test('swap shoud swap item in array', () => {
  let arr1 = [1, 2, 3];
  utils.swap(arr1, 0, 2);
  expect(arr1).toEqual([3, 2, 1]);

  let arr2 = [1, 2];
  utils.swap(arr2, 0, 1);
  expect(arr2).toEqual([2, 1]);
});
