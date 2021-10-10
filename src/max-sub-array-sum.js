export const maxSubarraySum = (arr, range) => {
  let i = 0,
    j = range - 1;
  let memSum = 0,
    maxSum = 0;

  if (range > arr.length) {
    return null;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  for (let k = 0; k < range; k++) {
    memSum += arr[k];
  }

  maxSum = memSum;

  while (j < arr.length - 1) {
    i++;
    j++;
    const sum = memSum - arr[i - 1] + arr[j];
    memSum = sum;
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
};
