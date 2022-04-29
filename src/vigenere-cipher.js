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
    let encryptedMessage = '';
    let shift = 0;

    for (let i = 0; i < message.length; i++) {
      if (!this.alphabet.includes(message[i])) {
        substitutedMessage += message[i];
        shift++;
        continue;
      }

      if (i >= key.length) {
        substitutedMessage += key[(i - shift) % key.length];
      } else {
        substitutedMessage += key[i - shift];
      }
    }

    for (let i = 0; i < substitutedMessage.length; i++) {
      let messageIndex = this.alphabet.indexOf(message[i]);
      let keyIndex = this.alphabet.indexOf(substitutedMessage[i]);

      if (!this.alphabet.includes(substitutedMessage[i])) {
        encryptedMessage += substitutedMessage[i];
        continue;
      }

      encryptedMessage += this.alphabet[(messageIndex + keyIndex) % this.alphabet.length];
    }

    if (this.isDirect === false) {
      encryptedMessage = Array.from(encryptedMessage).reverse();
      encryptedMessage = encryptedMessage.join('');
    }

    return encryptedMessage;
  }

  decrypt(encryptedMessage, key) {
    if (typeof (arguments[0]) !== 'string' || typeof (arguments[1]) !== 'string') {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let substitutedMessage = '';
    let decryptedMessage = '';
    let shift = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (!this.alphabet.includes(encryptedMessage[i])) {
        substitutedMessage += encryptedMessage[i];
        shift++;
        continue;
      }

      if (i >= key.length) {
        substitutedMessage += key[(i - shift) % key.length];
      } else {
        substitutedMessage += key[i - shift];
      }
    }

    for (let i = 0; i < substitutedMessage.length; i++) {
      let cipherIndex = this.alphabet.indexOf(encryptedMessage[i]);
      let keyIndex = this.alphabet.indexOf(substitutedMessage[i]);

      if (!this.alphabet.includes(substitutedMessage[i])) {
        decryptedMessage += substitutedMessage[i];
        continue;
      }

      if ((cipherIndex - keyIndex) < 0) {
        decryptedMessage += this.alphabet[(cipherIndex - (keyIndex - this.alphabet.length)) % this.alphabet.length];
      } else {
        decryptedMessage += this.alphabet[(cipherIndex - keyIndex) % this.alphabet.length];
      }
    }

    if (this.isDirect === false) {
      decryptedMessage = Array.from(decryptedMessage).reverse();
      decryptedMessage = decryptedMessage.join('');
    }

    return decryptedMessage;
  }
}


module.exports = {
  VigenereCipheringMachine
};
