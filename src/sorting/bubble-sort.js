import { swap } from '../utils/utils';

export const bubbleSort = (arr) => {
  if (arr.length <= 1) {
    return;
  }
  let j = arr.length - 1;

  while (j > 0) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
    j--;
  }
};
