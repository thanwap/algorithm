import { averagePair } from './average-pair';

test('should return false if not correct average', () => {
  expect(averagePair([1, 2, 3], 2.5));
  expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
  expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 3));
  expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 2));
});

test('should return false if not correct average', () => {
  expect(averagePair([], 4));
  expect(averagePair([1, 5, 6], 9));
  expect(averagePair([1, 2, 3], 5));
});
