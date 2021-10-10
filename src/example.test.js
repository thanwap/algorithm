test('slice 1', () => {
  let arr = ['a', 'b', 'c', 'd', 'e'];
  let expected = ['b', 'c'];
  let actual = arr.slice(1, 3);
  expect(actual).toEqual(expected);
});

test('slice 1', () => {
  let arr = ['a', 'b', 'c', 'd', 'e'];
  let expected = ['e'];
  let actual = arr.slice(4, 5);
  expect(actual).toEqual(expected);
  expect(arr).toEqual(['a', 'b', 'c', 'd', 'e']);
});

test('splice 1', () => {
  let arr = ['a', 'b', 'c', 'd', 'e'];
  let expected = ['a', 'd', 'e'];
  var items = arr.splice(1, 2);
  expect(items).toEqual(['b', 'c']);
  expect(arr).toEqual(expected);
});

test('splice 2', () => {
  let arr = ['a', 'b', 'c', 'd', 'e'];
  let expected = ['a', 'z', 'zz', 'd', 'e'];
  arr.splice(1, 2, ...['z', 'zz']);
  expect(arr).toEqual(expected);
});
