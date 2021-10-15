import { recursiveRange } from './recursive-range';

test('should sum from number to zero', () => {
  expect(recursiveRange(0)).toBe(0);
  expect(recursiveRange(1)).toBe(1);
  expect(recursiveRange(6)).toBe(21);
  expect(recursiveRange(10)).toBe(55);
});
