export const averagePair = (arr, avg) => {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    const calAvg = (arr[left] + arr[right]) / 2;

    if (calAvg === avg) {
      return true;
    }

    if (calAvg > avg) {
      right--;
    } else {
      left++;
    }
  }
  return false;
};
