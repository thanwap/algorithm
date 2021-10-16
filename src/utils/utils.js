export const isAlphaNumeric = (char) => {
  char += '';
  let code = char.charCodeAt(0);
  if (
    (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) ||
    (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) ||
    (code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0))
  ) {
    return true;
  }

  return false;
};

export const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};
