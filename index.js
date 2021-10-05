function isPalindrome(word) {
  return word === word.split("").reverse().join("")
}

isPalindrome('abba') // retruns true 
isPalindrome('racecar') // returns true
isPalindrome('a') // returns true
isPalindrome('robot') // returns false
isPalindrome('ab') // returns false
/* 
  set the word = to itself then divide it into subststring and call
  .reverse() on it to see if the word is still equal to itself when reverse 
  and then join it again
*/

/*
 set the word = to itself then divide it into subststring and call
 .reverse() on it to see if the word is still equal to itself when reverse 
  and then join it again

  after call the function and in the parentheses put in the word you want to check
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
