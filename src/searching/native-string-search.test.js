import { nativeStringSearch } from './native-string-search';

test('should count format string search', () => {
  expect(nativeStringSearch('hello', 'hel')).toBe(1);
  expect(nativeStringSearch('hello', 'hello')).toBe(1);
  expect(nativeStringSearch('hello', 'l')).toBe(2);
  expect(nativeStringSearch('hello', 'e')).toBe(1);

  expect(nativeStringSearch('abcdefomgomgkkkkkkomg', 'omg')).toBe(3);
  expect(nativeStringSearch('abcdefomgomgkkkkkkomg', 'a')).toBe(1);
  expect(nativeStringSearch('abcdefomgomgkkkkkkomg', 'k')).toBe(6);
  expect(nativeStringSearch('abcdefomgomgkkkkkkomg', 'kk')).toBe(5);

  expect(nativeStringSearch('lorie loled', 'lol')).toBe(1);
  expect(nativeStringSearch('lorie loled', 'lo')).toBe(2);

  expect(nativeStringSearch('hello om', 'omg')).toBe(0);
});

test('should return zero when format not match string search', () => {
  //   expect(nativeStringSearch('hello', 'abc')).toBe(0);
});
