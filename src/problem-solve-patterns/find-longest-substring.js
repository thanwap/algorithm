export const findLongestSubstring = (word) => {
  let map = {};

  let i = 0,
    j = 0,
    count = 0,
    maxCount = 0;

  while (j < word.length) {
    const char = word[j];

    if (map[char] !== undefined) {
      i = Math.max(i, map[char] + 1);
    }

    map[char] = j;
    count = j - i + 1;
    maxCount = Math.max(maxCount, count);
    j++;
  }
  return maxCount;
};
