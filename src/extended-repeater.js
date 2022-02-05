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
  
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    if (options.addition === undefined) break;
    additionString += options.addition + '     ';
  }

  additionString = additionString.trim().split('     ').join(options.additionSeparator ? options.additionSeparator : '|');
  
  for (let i = 0; i < options.repeatTimes; i++) {
    result += str + additionString + '     ';
  }
  
  result = result.trim().split('     ').join(options.separator ? options.separator : '+');
  
  console.log(result);
  return result;
}

let obj =  { repeatTimes: 3, separator: '♥♥♥  ', addition: ' пОкАкУнЬкАл ', additionRepeatTimes: 5, additionSeparator: '( ͡° ͜ʖ ͡°)' };

            //  аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ♥♥♥  аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ♥♥♥  аГуСиК  пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл ( ͡° ͜ʖ ͡°) пОкАкУнЬкАл 

 repeater('аГуСиК ', obj)

module.exports = {
  repeater
};