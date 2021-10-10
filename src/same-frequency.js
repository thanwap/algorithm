export const sameFrequency = (n1, n2) => {
  let s1 = n1 + '',
    s2 = n2 + '';

  let map = {};

  for (let c of s1) {
    map[c] = map[c] ? map[c] + 1 : 1;
  }

  for (let c of s2) {
    if (!map[c]) {
      return false;
    }
    map[c]--;
  }

  return true;
};
