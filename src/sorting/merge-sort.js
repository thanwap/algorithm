export const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = Math.floor(arr.length / 2);

  return merge(
    mergeSort(arr.slice(0, pivot)),
    mergeSort(arr.slice(pivot, arr.length))
  );
};

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
