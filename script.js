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
  if (!Array.isArray(arr)) throw new Error("Must enter object");
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
/* The current way the "censored words list" is provided to the application is via a helper function which converts it from an array into object.
Alternatives are:
- eliminate the helper function and refactor the application so that it only accepts objects (redundant solution).
- refactor the helper function so that it accepts different types of input (e.g. strings or arrays) and returns and an object.
- encapsulate the function in a class, declaring the 'censored words list' as a variable. this then means that the censored word list can be used in the function without passing it in as an argument.
*/  
