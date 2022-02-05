const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i ++;
        switch (arr[i + 1]) {
          case '--discard-prev':
          case '--double-prev':
            i ++;
        }
        break;
      case '--discard-prev':
        newArr.splice(-1);
        break;  
      case '--double-next':
        if (i === arr.length - 1) break;
        newArr.push(arr[i + 1]);
        break;
      case '--double-prev':
        if (i === 0) break;
        newArr.push(arr[i - 1]);
        break;
      default:
        newArr.push(arr[i]);
    }
  }
  return newArr;
}

// let testArr = [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5];
// transform(testArr)

module.exports = {
  transform
};

// var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
// var removed = myFish.splice(-1);

// console.log(myFish);
// console.log(removed);