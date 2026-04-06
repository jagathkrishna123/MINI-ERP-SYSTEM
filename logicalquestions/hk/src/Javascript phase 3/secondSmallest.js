function secondSmallest(arr) {
  if (arr.length < 2) return null;

  let smallest = Infinity;
  let second = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num < smallest) {
      second = smallest;   // old smallest becomes second
      smallest = num;      // update smallest
    } else if (num > smallest && num < second) {
      second = num;        // update second smallest
    }
  }

  return second === Infinity ? null : second;
}

// Test
console.log(secondSmallest([4, 2, 7, 1, 3])); // 2