import { binarySearch } from './binary-search';

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2];
const arr4 = [1];

test('should return index if found', () => {
  expect(binarySearch(arr1, 1)).toBe(0);
  expect(binarySearch(arr1, 2)).toBe(1);
  expect(binarySearch(arr1, 3)).toBe(2);
  expect(binarySearch(arr1, 4)).toBe(3);
  expect(binarySearch(arr1, 5)).toBe(4);

  expect(binarySearch(arr2, 1)).toBe(0);
  expect(binarySearch(arr2, 2)).toBe(1);
  expect(binarySearch(arr2, 3)).toBe(2);
  expect(binarySearch(arr2, 4)).toBe(3);

  expect(binarySearch(arr3, 1)).toBe(0);
  expect(binarySearch(arr3, 2)).toBe(1);

  expect(binarySearch(arr4, 1)).toBe(0);
});

test('should return -1 if not found', () => {
  expect(binarySearch(arr1, 0)).toBe(-1);
  expect(binarySearch(arr2, 0)).toBe(-1);
  expect(binarySearch(arr3, 0)).toBe(-1);
  expect(binarySearch(arr4, 0)).toBe(-1);

  expect(binarySearch(arr1, 8)).toBe(-1);
  expect(binarySearch(arr2, 8)).toBe(-1);
  expect(binarySearch(arr3, 8)).toBe(-1);
  expect(binarySearch(arr4, 8)).toBe(-1);
  expect(binarySearch([], 8)).toBe(-1);
});
