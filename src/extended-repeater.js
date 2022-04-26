const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  let additionString = '';

  options.repeatTimes ? options.repeatTimes : options.repeatTimes = 1;
  options.additionRepeatTimes ? options.additionRepeatTimes : options.additionRepeatTimes = 1;
  options.additionSeparator ? options.additionSeparator : options.additionSeparator = '|';
  options.separator ? options.separator : options.separator = '+';

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    if (options.addition === undefined) break;
    additionString += options.addition;
    (i === options.additionRepeatTimes - 1) ? additionString : additionString += options.additionSeparator;
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    result += str + additionString;
    (i === options.repeatTimes - 1) ? result : result += options.separator;
  }

  return result;
}


module.exports = {
  repeater
};