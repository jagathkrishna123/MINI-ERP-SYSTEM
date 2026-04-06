function maxOccurring(arr) {
  let freq = {};
  let maxCount = 0;
  let result = null;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    freq[num] = (freq[num] || 0) + 1;

    if (freq[num] > maxCount) {
      maxCount = freq[num];
      result = num;
    }
  }

  return result;
}

// Test
console.log(maxOccurring([1, 2, 2, 3, 3, 3, 4])); // 3