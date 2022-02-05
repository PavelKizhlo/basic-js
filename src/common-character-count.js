const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let firstStringLetters = s1.split('').sort();
  let secondStringLetters = s2.split('').sort();
  
  let i = firstStringLetters.length;
  let j = secondStringLetters.length;
  let commonCharacters = 0;

  while (i > 0 && j > 0) {
    i--;
    j--;
    if (firstStringLetters[i] > secondStringLetters[j]) j++;
    else if (firstStringLetters[i] < secondStringLetters[j]) i++;
    else commonCharacters += 1;    
  }
  
  return commonCharacters;
}


module.exports = {
  getCommonCharacterCount
};
