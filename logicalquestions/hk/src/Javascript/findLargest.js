function findLargest(arr) {
  let largest = arr[0]; // assume first element is largest

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]; // update largest
    }
  }

  return largest;
}

console.log(findLargest([3, 7, 2, 9, 5])); // 9