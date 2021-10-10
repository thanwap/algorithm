import { isSubSequence } from './is-subsequence';

test('should return false if not subsequence ', () => {
  expect(isSubSequence('hello', 'hello world')).toBe(true);
  expect(isSubSequence('sing', 'sting')).toBe(true);
  expect(isSubSequence('abc', 'abrrasdgscqa')).toBe(true);
  expect(isSubSequence('c', 'abrrasdgscqa')).toBe(true);
});

test('should return false if not subsequence ', () => {
  expect(isSubSequence('abc', 'acb')).toBe(false);
});
