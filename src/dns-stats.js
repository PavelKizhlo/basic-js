const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let stats = {};
  
    for (let i = 0; i < domains.length; i++) {
      let doms = domains[i].split('.').reverse();

      for (let j = 0; j < doms.length; j++) {
        let domain = `.${doms.slice(0, j + 1).join('.')}`;
        if (isNaN(stats[domain])) {
          stats[domain] = 1;
        } else {
          stats[domain] += 1;
        };
      };
    }
  return stats;
}
    

module.exports = {
  getDNSStats
};
