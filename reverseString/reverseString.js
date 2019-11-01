const reverseString = function(str) {
  return [...str].reduce((acc, c) => `${c}${acc}`, '');
}

module.exports = reverseString
