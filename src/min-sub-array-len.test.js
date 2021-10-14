import { minSubarrayLen } from './min-sub-array-len';

test('should return min rank that sum grether than equal sum input', () => {
  expect(minSubarrayLen([7], 7)).toBe(1);
  expect(minSubarrayLen([8], 7)).toBe(1);
  expect(minSubarrayLen([1, 3, 5, 11], 11)).toBe(1);
  expect(minSubarrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
});

test('should return 0 when sum not grather equal than sum input', () => {
  expect(minSubarrayLen([], 7)).toBe(0);
  expect(minSubarrayLen([1], 7)).toBe(0);
  expect(minSubarrayLen([2, 3, 1], 7)).toBe(0);
});
