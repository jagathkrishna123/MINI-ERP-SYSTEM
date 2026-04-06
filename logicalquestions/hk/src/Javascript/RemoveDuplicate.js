function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {  //if not in result → add to result// already exists ❌ → skip
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// [1, 2, 3, 4, 5]


// .......iteration...........
// Start → []

// Add 1 → [1]
// Add 2 → [1,2]
// Skip 2
// Add 3 → [1,2,3]
// Add 4 → [1,2,3,4]
// Skip 4
// Add 5 → [1,2,3,4,5]