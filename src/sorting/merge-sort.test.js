import { merge, mergeSort } from './merge-sort';

test('merge should merge sorted array', () => {
  expect(merge([2], [1])).toEqual([1, 2]);
  expect(merge([2, 3], [1])).toEqual([1, 2, 3]);
  expect(merge([2, 3], [1, 4, 6])).toEqual([1, 2, 3, 4, 6]);
  expect(merge([1], [1])).toEqual([1]);
  expect(merge([1, 2], [1])).toEqual([1, 2]);
  expect(merge([1, 2, 6], [1, 3, 5, 6])).toEqual([1, 2, 3, 5, 6]);
  expect(merge([1, 3, 5], [2, 4, 9])).toEqual([1, 2, 3, 4, 5, 9]);
});

test('merge sort should sort array ', () => {
  expect(mergeSort([1])).toEqual([1]);
  expect(mergeSort([2, 1])).toEqual([1, 2]);
  expect(mergeSort([2, 1, 3])).toEqual([1, 2, 3]);
  expect(mergeSort([1, 4, 2, 5, 9, 3])).toEqual([1, 2, 3, 4, 5, 9]);
});
