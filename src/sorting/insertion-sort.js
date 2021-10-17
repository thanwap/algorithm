import { swap } from '../utils/utils';

export const insertionSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > val; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = val;
  }
};
