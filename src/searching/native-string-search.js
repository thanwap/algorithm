export const nativeStringSearch = (word, format) => {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    let start = i;
    for (let j = 0; j < format.length; j++) {
      if (start >= word.length) {
        break;
      }

      if (word[start] !== format[j]) {
        break;
      } else {
        if (
          word[start] === format[format.length - 1] &&
          j === format.length - 1
        ) {
          count++;
        }
        start++;
      }
    }
  }
  return count;
};
