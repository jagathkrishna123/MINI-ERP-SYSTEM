function moveNegatives(arr) {
  let negatives = [];
  let positives = [];

  let n = 0; // index for negatives
  let p = 0; // index for positives

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negatives[n] = arr[i]; // manually assign
      n++;
    } else {
      positives[p] = arr[i];
      p++;
    }
  }

  // merge manually (no spread)
  let result = [];
  let k = 0;

  for (let i = 0; i < negatives.length; i++) {
    result[k++] = negatives[i];
  }

  for (let i = 0; i < positives.length; i++) {
    result[k++] = positives[i];
  }

  return result;
}

console.log(moveNegatives([3, -2, 5, -1, 0, -7, 4]));


// expanded version (recommended)...................


// function moveNegatives(arr) {
//   let negatives = [];
//   let positives = [];

//   let n = 0; // index for negatives
//   let p = 0; // index for positives

//   // Separate negatives and positives
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       negatives[n] = arr[i];
//       n++;
//     } else {
//       positives[p] = arr[i];
//       p++;
//     }
//   }

//   // Merge both arrays manually
//   let result = [];
//   let k = 0;

//   for (let i = 0; i < negatives.length; i++) {
//     result[k] = negatives[i];
//     k++;
//   }

//   for (let i = 0; i < positives.length; i++) {
//     result[k] = positives[i];
//     k++;
//   }

//   return result;
// }

// // Example
// console.log(moveNegatives([3, -2, 5, -1, 0, -7, 4]));
// // Output: [-2, -1, -7, 3, 5, 0, 4]

