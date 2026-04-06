function findSmallest(arr) {
  let smallest = arr[0]; // assume first element is smallest

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

// Example
console.log(findSmallest([5, 2, 9, 1, 7])); // 1