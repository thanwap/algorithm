import { linearSearch } from './linear-search';

const arr = [1, 2, 3, 9, 44, 11, 22, 55, 6];

test('should return index if found', () => {
  expect(linearSearch(arr, 1)).toBe(0);
  expect(linearSearch(arr, 2)).toBe(1);
  expect(linearSearch(arr, 6)).toBe(8);
  expect(linearSearch(arr, 44)).toBe(4);
});

test('should return -1 if not found', () => {
  expect(linearSearch(arr, 99)).toBe(-1);
  expect(linearSearch(arr, 8)).toBe(-1);
});
