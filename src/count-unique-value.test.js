import { countUniqueValue } from './count-unique-value';

test('should count unique sorted array', () => {
  expect(countUniqueValue([])).toBe(0);
  expect(countUniqueValue([1])).toBe(1);
  expect(countUniqueValue([1, 2])).toBe(2);
  expect(countUniqueValue([1, 1, 2])).toBe(2);
  expect(countUniqueValue([1, 2, 2])).toBe(2);
  expect(countUniqueValue([0, 1, 2, 2])).toBe(3);
  expect(countUniqueValue([1, 1, 2, 3, 4, 5, 5, 7, 7, 7])).toBe(6);
  expect(countUniqueValue(['a', 'b', 'b'])).toBe(2);
  expect(countUniqueValue(['a', 'b', 'c', 'c'])).toBe(3);
});
