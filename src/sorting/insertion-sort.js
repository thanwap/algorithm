import { swap } from '../utils/utils';

export const insertionSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 1; i < arr.length; i++) {
    let mem = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[mem] < arr[j]) {
        swap(arr, j, mem);
        mem--;
      } else if (arr[mem] >= arr[j]) {
        break;
      }
    }
  }
};
