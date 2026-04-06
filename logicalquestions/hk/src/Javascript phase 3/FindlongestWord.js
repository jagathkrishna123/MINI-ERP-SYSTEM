function longestWord(sentence) {
  let words = sentence.split(" "); // split sentence into words
  let longest = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i]; // update longest word
    }
  }

  return longest;
}

// Test
console.log(longestWord("I love programming in JavaScript"));
// Output: "programming"