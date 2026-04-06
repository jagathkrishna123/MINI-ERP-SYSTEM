function firstNonRepeating(str) {
  // Loop through each character
  for (let i = 0; i < str.length; i++) {
    let count = 0;

    // Compare with every other character
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }

    // If count is 1 → non-repeating
    if (count === 1) {
      return str[i];
    }
  }

  return null;
}

console.log(firstNonRepeating("aabbcde")); // c