export const nativeStringSearch = (word, format) => {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < format.length; j++) {
      if (i + j >= word.length) {
        break;
      }

      if (word[i + j] !== format[j]) {
        break;
      }
      if (j === format.length - 1) {
        count++;
      }
    }
  }
  return count;
};
