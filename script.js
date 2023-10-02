`use strict`;

// 1.Swap two variables without using a temporary variable.
function swapVariables(a, b) {
  [a, b] = [b, a];
  return [a, b];
}
console.log(swapVariables("skill", "safari"));
// 2. Check if a given number, is a prime number.
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7));
console.log(isPrime(76));
// 3. Check if a given string is a valid email address.
function isValidEmail(email) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return pattern.test(email);
}
console.log(isValidEmail("dhirajkumar2k17@gmail.com"));
console.log(isValidEmail("invalid-email"));
// 4. Calculate the factorial of a number using a recursive function.
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(7));
// 5. Reverse words in a sentence without reversing the individual words.
function reverseWordsInSentence(sentence) {
  const words = sentence.split(" ");
  const reversedWords = words.map((word) => {
    return word.split("").reverse().join("");
  });

  const reversedSentence = reversedWords.join(" ");
  return reversedSentence;
}
console.log(reverseWordsInSentence("life is beautiful"));

// 6. Write a sum method which will work properly when invoked using either syntax below.

function sum(x, y) {
  if (y === undefined) {
    return function (y) {
      return x + y;
    };
  } else {
    return x + y;
  }
}

console.log(sum(32, 76));
console.log(sum(32)(76));

// 7. What will be the output of the code below?

// Named Function Expression (NFE)
// var Foo = function bar(a) {
//   return 7;
// };

// typeof bar(a);
console.log("7. it throws an exception");

// 8. Check if a given string is a valid palindrome, considering only alphanumeric characters and ignoring case.

function isPalindrome(str) {
  const alphanumericStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const reversedStr = alphanumericStr.split("").reverse().join("");

  return alphanumericStr === reversedStr;
}

console.log(isPalindrome("A man, a plan, a canal, Panama, study"));
console.log(isPalindrome("race car"));

// 9. Write a function that counts how many times a specific element appears in an array.

function countOccurrences(arr, element) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }

  return count;
}

const arr = [1, 2, 2, 3, 4, 2, 5, 5, 3, 2, 7, 2];
const count = countOccurrences(arr, 2);
console.log(count);

// 10. Write a function that detects if a given substring exists in a larger string.

function doesSubstringExist(largeString, substring) {
  return largeString.includes(substring);
}

const largeString = "This is a sample string for testing.";
const substring = "sample";
console.log(doesSubstringExist(largeString, substring));
