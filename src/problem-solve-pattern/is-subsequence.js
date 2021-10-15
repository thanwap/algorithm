export const isSubSequence = (s1, s2) => {
  let i = 0,
    j = 0;
  while (j < s2.length) {
    if (s1[i] == s2[j]) {
      i++;
    }

    if (i === s1.length) {
      return true;
    }

    j++;
  }
  return false;
};
