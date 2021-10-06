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
  // if both strings not same length return false
  if (str1.length !== str2.length) {
    return false;
  }
  //Make a frequency Counter for str1
  const lookup = {};
  //if a char is not a key in the object make it and set it to 1, if exist increament char key +1
  for (let char of str1) {
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }
  console.log(lookup);
  //loop str2 and lookup the str1 frequencyCounter if any char does not exist or zero return false,
  //othewise subtract it(to know it has been noted[exahust it])
  for (let char of str2) {
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }
  return true;
};
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
