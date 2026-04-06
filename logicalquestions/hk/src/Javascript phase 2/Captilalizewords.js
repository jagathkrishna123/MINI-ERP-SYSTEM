function capitalizeWords(str) {
  let words = str.split(' ');
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    let capitalized =
      word.charAt(0).toUpperCase() + word.slice(1);

    result.push(capitalized);
  }

  return result.join(' ');
}

// Example
console.log(capitalizeWords("hello world user sam"));
// Output: "Hello World User Sam"