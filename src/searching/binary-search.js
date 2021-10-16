export const binarySearch = (arr, val) => {
  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    const pivot = Math.ceil((j + i) / 2);
    const pivotVal = arr[pivot];
    if (val === pivotVal) {
      return pivot;
    } else if (val > pivotVal) {
      i = pivot + 1;
    } else {
      j = pivot - 1;
    }
  }

  if (i === j && val === arr[i]) {
    return i;
  }

  return -1;
};
