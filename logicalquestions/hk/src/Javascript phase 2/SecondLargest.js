function secondLargest(arr) {
  if (arr.length < 2) return null;

  let largest = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;     // old largest becomes second
      largest = arr[i];     // update largest
    } else if (arr[i] > second && arr[i] !== largest) {
      second = arr[i];      // update second largest
    }
  }

  return second === -Infinity ? null : second;
}

// Example
console.log(secondLargest([5, 2, 9, 1, 7])); // 7

