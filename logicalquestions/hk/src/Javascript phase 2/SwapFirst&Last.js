function swapFirstLast(arr) {
  let temp = arr[0];                // store first element
  arr[0] = arr[arr.length - 1];     // replace first with last
  arr[arr.length - 1] = temp;       // replace last with first

  return arr;
}

console.log(swapFirstLast([1, 2, 3, 4]));
// [4, 2, 3, 1]