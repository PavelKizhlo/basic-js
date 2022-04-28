const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',
  chainToReturn: '',
  links: [],
  getLength() {
    return this.links.length;
  },

  addLink(value) {
    value === undefined ? value = ' ' : value;

    if (this.chain === '') {
      this.chain += `( ${value} )`;
    } else {
      this.chain += `~~( ${value} )`
    };

    this.links.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (typeof (position) !== 'number' || position <= 0 || position > this.links.length) {
      this.links = [];
      this.chain = '';
      throw new Error("You can\'t remove incorrect link!");
    }

    this.links.splice(position - 1, 1);
    this.chain = '';

    this.links.forEach(link => {
      this.chain += link + '~~';
    })

    this.chain = this.chain.slice(0, -2);
    return this;
  },

  reverseChain() {
    this.chain = '';
    this.links.reverse();

    this.links.forEach(link => {
      this.chain += link + '~~';
    })

    this.chain = this.chain.slice(0, -2);
    return this;
  },

  finishChain() {
    this.chainToReturn = this.chain;
    this.links = [];
    this.chain = '';
    return this.chainToReturn;
  }
};

module.exports = {
  chainMaker
};
