const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || isNaN(+sampleActivity)) return false;
  if (+sampleActivity <= 0 || +sampleActivity > MODERN_ACTIVITY) return false;

  const RADIOACTIVE_DECAY_CONSTANT = Math.LN2 / HALF_LIFE_PERIOD;
  let activityRatio = MODERN_ACTIVITY / sampleActivity;
  let sampleAge = Math.ceil(Math.log(activityRatio) / RADIOACTIVE_DECAY_CONSTANT);

  return sampleAge;
}

module.exports = {
  dateSample
};

