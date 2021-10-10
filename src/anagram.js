export const validAnagram = (s1, s2) => {
  if (s1.length != s2.length) {
    return false;
  }
  let map1 = {};
  for (let c1 of s1) {
    map1[c1] = map1[c1] ? map1[c1] + 1 : 1;
  }

  let map2 = {};
  for (let c2 of s2) {
    map2[c2] = map2[c2] ? map2[c2] + 1 : 1;
  }

  for (let k of Object.keys(map1)) {
    if (!k in map2) {
      return false;
    }
    if (map1[k] != map2[k]) {
      return false;
    }
  }

  return true;
};
