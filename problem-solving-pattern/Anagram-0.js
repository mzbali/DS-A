// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)

const validAnagram = (str1, str2) => {
  //check if str1 and str2 ar same length
  if (str1.length !== str1.length) {
    return false;
  }
  //make two object to return to count the frequency off str1 and str2
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  //check howmany times a char occurs in str1 and update the object(add 1 if already exist , else initialize with 1)
  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  //check howmany times a char occurs in str2 and update the object(add 1 if already exist , else initialize with 1)
  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  //check if object1 and object2 key value are same
  for (let char in frequencyCounter1) {
    if (frequencyCounter1[char] !== frequencyCounter2[char]) {
      return false;
    }
  }
  return true;
};

console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
