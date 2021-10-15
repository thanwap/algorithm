export const validAnagram = (s1, s2) => {
  if (s1.length != s2.length) {
    return false;
  }
  let map1 = {};
  for (let c1 of s1) {
    map1[c1] = map1[c1] ? map1[c1] + 1 : 1;
  }

  for (let c2 of s2) {
    if (!map1[c2]) {
      return false;
    }
    map1[c2] -= 1;
  }

  return true;
};
