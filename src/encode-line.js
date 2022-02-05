const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let letters = str.split('');
  let line = '';

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i-1]) continue;
    let sum = 1;
    let j = i + 1;

    while (letters[i] === letters[j]) {
      j++;
      sum ++;
    }

  if (sum !== 1) line += sum;
    
  line += letters[i]; 
  }
  return line;
}

module.exports = {
  encodeLine
};
