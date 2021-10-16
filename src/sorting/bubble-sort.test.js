import { bubbleSort } from './bubble-sort';

test('should sort item', () => {
  let arr1 = [1];
  bubbleSort(arr1);
  expect(arr1).toEqual([1]);
  let arr2 = [];
  bubbleSort(arr2);
  expect(arr2).toEqual([]);
  let arr3 = [2, 1];
  bubbleSort(arr3);
  expect(arr3).toEqual([1, 2]);
  let arr4 = [2, 8, 1, 3, 5, 4];
  bubbleSort(arr4);
  expect(arr4).toEqual([1, 2, 3, 4, 5, 8]);
  let arr5 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  bubbleSort(arr5);
  expect(arr5).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  let arr6 = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  bubbleSort(arr6);
  expect(arr6).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
