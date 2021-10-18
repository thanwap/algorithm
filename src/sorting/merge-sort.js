export const mergeSort = (arr) => {};

export const merge = (arr1, arr2) => {
  let res = [];
  let i = 0,
    j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (i >= arr1.length || arr1[i] > arr2[j]) {
      res.push(arr2[j]);
      j++;
    } else if (j >= arr2.length || arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      //equal
      res.push(arr1[i]);
      i++;
      j++;
    }
  }

  return res;
};
