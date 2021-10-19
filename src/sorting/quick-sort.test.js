import { quickSort, pivot } from './quick-sort';

test('quickSort should return right pivot index', () => {
  let arr1 = [1];
  let arr2 = [1, 2];
  let arr3 = [2, 3, 1];
  let arr4 = [2, 3, 1, 0, 5];
  let arr5 = [5, 3, 1, 0, 2];
  let arr6 = [26, 23, 27, 44, 17, 47, 39, 42, 43, 1];
  quickSort(arr1);
  expect(arr1).toEqual([1]);
  quickSort(arr2);
  expect(arr2).toEqual([1, 2]);
  quickSort(arr3);
  expect(arr3).toEqual([1, 2, 3]);
  quickSort(arr4);
  expect(arr4).toEqual([0, 1, 2, 3, 5]);
  quickSort(arr5);
  expect(arr5).toEqual([0, 1, 2, 3, 5]);
  quickSort(arr6);
  expect(arr6).toEqual([1, 17, 23, 26, 27, 39, 42, 43, 44, 47]);
});

test('pivot should return right pivot index', () => {
  let arr1 = [1];
  let arr2 = [1, 2];
  let arr3 = [2, 3, 1];
  let arr4 = [2, 3, 1, 0, 5];
  let arr5 = [5, 3, 1, 0, 2];
  let arr6 = [26, 23, 27, 44, 17, 47, 39, 42, 43, 1];

  expect(pivot(arr1, 0, 0)).toBe(0);
  expect(pivot(arr2, 0, 1)).toBe(0);
  const res3 = pivot(arr3, 0, 2);
  expect(arr3).toEqual([1, 2, 3]);
  expect(res3).toBe(1);

  const res4 = pivot(arr4, 0, 4);
  expect(res4).toBe(2);

  const res5 = pivot(arr5, 0, 4);
  expect(res5).toBe(4);

  const res6 = pivot(arr6, 0, 9);
  expect(res6).toBe(3);
});
