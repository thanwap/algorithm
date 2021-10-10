import { areThereDuplicates } from './are-there-duplicates';

test('should return true when it have duplicate', () => {
  expect(areThereDuplicates(1, 1)).toBe(true);
  expect(areThereDuplicates(1, 2, 1)).toBe(true);
});

test('should return false when it not have duplicate', () => {
  expect(areThereDuplicates(1, 2)).toBe(false);
  expect(areThereDuplicates(1, 2, 3)).toBe(false);
});
