import { swap } from '../utils/utils';

export const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) {
    return;
  }

  const p = pivot(arr, left, right);
  if (left === 3 && Math.max(0, p - 1) === 2) {
    return;
  }
  quickSort(arr, left, Math.max(0, p - 1));
  quickSort(arr, Math.min(arr.length - 1, p + 1), right);
};

export const pivot = (arr, start, end) => {
  let p = start;
  let pValue = arr[p];
  let pMem = p;

  if (arr.length <= 1) {
    return pMem;
  }

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pValue) {
      pMem++;
      swap(arr, i, pMem);
    }
  }

  swap(arr, pMem, p);

  return pMem;
};
