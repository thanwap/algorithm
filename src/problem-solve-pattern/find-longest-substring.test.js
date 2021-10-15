import { findLongestSubstring } from './find-longest-substring';

test('should return longest distinct string', () => {
  expect(findLongestSubstring('')).toBe(0);
  expect(findLongestSubstring('a')).toBe(1);
  expect(findLongestSubstring('ab')).toBe(2);
  expect(findLongestSubstring('abc')).toBe(3);
  expect(findLongestSubstring('aac')).toBe(2);
  expect(findLongestSubstring('aaac')).toBe(2);
  expect(findLongestSubstring('aaacc')).toBe(2);
  expect(findLongestSubstring('bbbbbbbbbb')).toBe(1);
  expect(findLongestSubstring('rithmschool')).toBe(7);
  expect(findLongestSubstring('thisisawesome')).toBe(6);
  expect(findLongestSubstring('thecat')).toBe(5);
  expect(findLongestSubstring('thecati')).toBe(6);
  expect(findLongestSubstring('thecatin')).toBe(7);
  expect(findLongestSubstring('thecatin')).toBe(7);
  expect(findLongestSubstring('thecatint')).toBe(7);
  expect(findLongestSubstring('thecatinth')).toBe(7);
  expect(findLongestSubstring('thecatinthehat')).toBe(7);
});
