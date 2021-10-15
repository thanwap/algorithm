export const countUniqueValue = (arr) => {
  if (arr.length <= 1) {
    return arr.length;
  }

  let i = 0,
    j = 1;

  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }

    j++;
  }

  return i + 1;
};
