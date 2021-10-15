export const minSubarrayLen = (arr, sum) => {
  let total = 0;
  let start = 0,
    end = 0;
  let minRange = Infinity;

  while (start < arr.length) {
    if (total < sum && end < arr.length) {
      total += arr[end];
      end += 1;
    } else if (total >= sum) {
      minRange = Math.min(minRange, end - start);
      total -= arr[start];
      start += 1;
    } else {
      break;
    }
  }

  return minRange == Infinity ? 0 : minRange;
};
