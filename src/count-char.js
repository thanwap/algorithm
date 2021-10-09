import { isAlphaNumeric } from './utils';

export const countChar = (words) => {
  let res = {};

  if (!words) {
    return res;
  }

  for (let char of words) {
    if (!isAlphaNumeric(char)) {
      continue;
    }

    char = char.toLowerCase();

    res[char] = ++res[char] || 1;
  }

  return res;
};
