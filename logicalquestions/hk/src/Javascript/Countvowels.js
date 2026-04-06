function countVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Hello World")); // 3