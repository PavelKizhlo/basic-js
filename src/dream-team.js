const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let correctMembers = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] !== 'string') continue;
    if (!isNaN(+members[i])) continue;
    correctMembers.push(members[i].trim().substring(0,1).toUpperCase());
  }
  
  correctMembers.sort();
  let teamName = correctMembers.join('');
  
  return teamName;
}


module.exports = {
  createDreamTeam
};
