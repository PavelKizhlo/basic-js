const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n += '';
  let results = [+n.substring(1)];

  for (let i = 1; i < n.length; i++) {
    let result = n.substring(0, i) + n.substring(i+1);
    results.push(+result);
  }

  return Math.max.apply(null, results);
}

module.exports = {
  deleteDigit
};
