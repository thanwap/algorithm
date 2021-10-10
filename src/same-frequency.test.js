import { sameFrequency } from './same-frequency';

test('should return true when number have same frequency', () => {
  // expect(sameFrequency(1, 1)).toBe(true);
  // expect(sameFrequency(1234, 4321)).toBe(true);
  // expect(sameFrequency(1134, 4131)).toBe(true);
  // expect(sameFrequency(5554, 5545)).toBe(true);
});

test('should return false when number not have same frequency', () => {
  // expect(sameFrequency(1, 0)).toBe(false);
  // expect(sameFrequency(1, 11)).toBe(false);
  // expect(sameFrequency(234, 143)).toBe(false);
  expect(sameFrequency(222, 22)).toBe(false);
});
