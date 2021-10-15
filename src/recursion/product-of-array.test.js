import { productOfArray } from './product-of-array';

test('should return mutiple number of array', () => {
  expect(productOfArray([])).toBe(0);
  expect(productOfArray([1])).toBe(1);
  expect(productOfArray([1, 1])).toBe(1);
  expect(productOfArray([1, 2])).toBe(2);
  expect(productOfArray([1, 2, 3])).toBe(6);
  expect(productOfArray([9, 9])).toBe(81);
  expect(productOfArray([9, 9, 50, 0])).toBe(0);
});
