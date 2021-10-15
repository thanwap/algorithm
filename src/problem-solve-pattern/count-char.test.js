import { countChar } from './count-char';

test('should map char in normal string', () => {
  let actual = countChar('hello');
  expect(Object.keys(actual).length).toBe(4);
  expect(actual['h']).toBe(1);
  expect(actual['e']).toBe(1);
  expect(actual['l']).toBe(2);
  expect(actual['o']).toBe(1);
});

test('should map char to lowercase in Upper string', () => {
  let actual = countChar('HeLlo');
  expect(Object.keys(actual).length).toBe(4);
  expect(actual['h']).toBe(1);
  expect(actual['e']).toBe(1);
  expect(actual['l']).toBe(2);
  expect(actual['o']).toBe(1);
});

test('should map only number and alhabet', () => {
  let actual = countChar('H e L % l o');
  expect(Object.keys(actual).length).toBe(4);
  expect(actual['h']).toBe(1);
  expect(actual['e']).toBe(1);
  expect(actual['l']).toBe(2);
  expect(actual['o']).toBe(1);
});

test('should return empty object in empty string or null', () => {
  expect(Object.keys(countChar('')).length).toBe(0);
  expect(Object.keys(countChar(null)).length).toBe(0);
});
