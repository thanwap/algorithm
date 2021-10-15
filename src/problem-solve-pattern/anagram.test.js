import { validAnagram } from './anagram';

test('validAnagram should valid when input have equal frequency of alphabet', () => {
  expect(validAnagram('hello', 'ehlol')).toBe(true);
  expect(validAnagram('aab', 'baa')).toBe(true);
  expect(validAnagram('', '')).toBe(true);
});

test('validAnagram should not valid when input have not equal frequency of alphabet', () => {
  expect(validAnagram('hello', 'ehlo')).toBe(false);
  expect(validAnagram('hello', 'ehlox')).toBe(false);
  expect(validAnagram('aab', 'bba')).toBe(false);
  expect(validAnagram('', 'bba')).toBe(false);
});
