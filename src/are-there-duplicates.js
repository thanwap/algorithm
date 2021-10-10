export function areThereDuplicates() {
  let map = {};
  for (let item of arguments) {
    map[item] = map[item] ? map[item] + 1 : 1;
    if (map[item] > 1) {
      return true;
    }
  }
  return false;
}
