const str = "Hello world from JS";

let length = 0;

// Start from end
for (let i = str.length - 1; i >= 0; i--) {
  if (str[i] !== " ") {
    length++;
  } else if (length > 0) {
    break;
  }
}

console.log(length); // 2