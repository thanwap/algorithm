import { maxSubarraySum } from './max-sub-array-sum';

test('should return correct max of sum by range', () => {
  expect(maxSubarraySum([0], 1)).toBe(0);
  expect(maxSubarraySum([2], 1)).toBe(2);
  expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
  expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
  expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
  expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toBe(5);
  expect(maxSubarraySum([2, 3], 3)).toBe(null);
});
