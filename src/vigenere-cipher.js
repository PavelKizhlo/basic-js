const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect) {
    isDirect === false ? isDirect : isDirect = true;
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (typeof (arguments[0]) !== 'string' || typeof (arguments[1]) !== 'string') {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    let substitutedMessage = '';
    // let maxlength = Math.max(message.length, key.length);
    // let encryptedMessage = '';

    // for (let i = 0; i < maxlength; i++) {
    //   let messageIndex = this.alphabet.indexOf(message[((i >= message.length) ? i % message.length : i)]);
    //   let keyIndex = this.alphabet.indexOf(key[((i >= key.length) ? i % key.length : i)]);

    //   let letter = this.alphabet[(((this.alphabet.length + (messageIndex + keyIndex)) % this.alphabet.length))];
    //   if (messageIndex === -1) letter = message[i];

    //   encryptedMessage += letter;
    // }
    for (let i = 0; i < message.length; i++) {
      let c = 0;
      if (!this.alphabet.includes(message[i])) {
        substitutedMessage += message[i];
        continue;
      }

      if (i >= key.length) {
        substitutedMessage += key[(i) % key.length];
      } else {
        substitutedMessage += key[i];
      }
    }
    console.log(substitutedMessage)

    // return encryptedMessage;
  }

  decrypt(encryptedMessage, key) {
    if (typeof (arguments[0]) !== 'string' || typeof (arguments[1]) !== 'string') {
      throw new Error('Incorrect arguments!');
    }
  }
}

let test = new VigenereCipheringMachine();
let r = test.encrypt('attack at dawn!', 'alphonse');
// console.log(r);

module.exports = {
  VigenereCipheringMachine
};
