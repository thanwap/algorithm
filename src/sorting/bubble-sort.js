import { swap } from '../utils/utils';

export const bubbleSort = (arr) => {
  if (arr.length <= 1) {
    return;
  }
  let j = arr.length - 1;

  while (j > 0) {
    let isSwap = false;
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        isSwap = true;
        swap(arr, i, i + 1);
      }
    }
    if (!isSwap) {
      break;
    }
    j--;
  }
};
