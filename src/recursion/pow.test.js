import { power } from './pow';

test('should return power number', () => {
  expect(power(2, 0)).toBe(1);
  expect(power(2, 1)).toBe(2);
  expect(power(2, 2)).toBe(4);
  expect(power(2, 4)).toBe(16);
  expect(power(3, 3)).toBe(27);
});
