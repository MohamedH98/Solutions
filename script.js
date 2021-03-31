// Solution for task 1
exports.countLetterOccurences = (letter, string) => {
  if (typeof letter !== "string" || typeof string !== "string") {
    return "Incorrect input";
  } else {
    let numOfOccurences = 0;
    for (let i = 0; i < string.length; i++) {
      string.charAt(i) == letter ? numOfOccurences++ : "";
    }
    return numOfOccurences;
  }
};

// Solution for task 2
exports.isPalindrome = (string) => {
  const cleanStr = string.toLowerCase().replace(/[\W_]/g, "");
  const val = cleanStr.split("").reverse("").join("");
  return val === cleanStr;
};

// Solution for task 3 A
exports.arrToObj = (arr) => {
  const censoredObj = {};
  arr.forEach((word) => {
    censoredObj[word] = 0;
  });
  return censoredObj;
};

exports.numOfOccurence = function (arr, text) {
  const censoredObj = arrToObj(arr);
  const textStr = text.toLowerCase().split(" ");
  let count = 0;
  const censoredListTally = Object.assign({}, censoredObj);
  for (censoredWord in censoredObj) {
    textStr.forEach((str) => {
      if (str.includes(censoredWord)) {
        censoredListTally[censoredWord]++;
        count++;
      }
    });
  }
  censoredListTally["total"] = count;
  return censoredListTally;
};

// Solution for task 3 B
exports.censorWord = function (censoredList, sentence) {
  return sentence
    .split(/\b/)
    .map((word) => {
      if (censoredList.includes(word.toLowerCase())) {
        return word[0] + "$".repeat(word.length - 2) + word.slice(-1);
      }
      return word;
    })
    .join("");
};

// Solution for task 3 C
exports.censorPalindrome = (sentence) => {
  return sentence
    .split(/\b/)
    .map((word) => {
      if (isPalindrome(word) === true && word !== " ") {
        return word[0] + "$".repeat(word.length - 2) + word.slice(-1);
      }
      return word;
    })
    .join("");
};

// Solution for task 3 D
