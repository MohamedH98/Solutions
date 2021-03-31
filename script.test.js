const { expect } = require("@jest/globals");
const { countLetterOccurences } = require("./script.js");
const { isPalindrome } = require("./script.js");
const { arrToObj } = require("./script.js");
const { numOfOccurence } = require("./script.js");
const { censorWord } = require("./script.js");
const { censorPalindrome } = require("./script.js");

// Test for solution 1
test("should output number of occurennces of letter in string", () => {
  const text = countLetterOccurences("e", "I have some cheese");
  expect(text).toBe(5);
  const text2 = countLetterOccurences(23423, 234234);
  expect(text2).toBe("Incorrect input");
});

// Test for solution 2
test("should return true of string is a palindrome", () => {
  const text = isPalindrome("I have some cheese");
  expect(text).toBe(false);
  const text2 = isPalindrome("God saved Eva’s dog");
  expect(text2).toBe(true);
});

// Test for solution 3 part A
test("return an object with values initialised to 0", () => {
  const text = arrToObj(["dog", "cat", "large"]);
  expect(text).toStrictEqual({ dog: 0, cat: 0, large: 0 });
});

// Test for solution 3 part A
test("return the number of occurances of words from a 'censored word' list", () => {
  const text = numOfOccurence(
    ["dog", "cat", "large"],
    "I have a cat named Meow and a dog name Woof. I love the dog a lot. He is larger than a small horse."
  );
  expect(text).toStrictEqual({ cat: 1, dog: 2, large: 1, total: 4 });
});

// Test for solution 3 part B
test("censor words featured in the 'censored words list' that appear in text", () => {
  const text = censorWord(
    ["meow", "woof"],
    "I have a cat named Meow and a dog name Woof. I love the dog a lot. He is larger than a small horse."
  );
  expect(text).toBe(
    "I have a cat named M$$w and a dog name W$$f. I love the dog a lot. He is larger than a small horse."
  );
});

// Test for solution 3 part B
test("censor a single palindrome in a text", () => {
  const text = censorPalindrome(
    "Anna went to vote in the election to fulfil her civic duty"
  );
  expect(text).toBe(
    "A$$a went to vote in the election to fulfil her c$$$c duty"
  );
});
