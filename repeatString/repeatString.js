const repeatString = function(str, times) {
  if (times < 0) return 'ERROR';
  return new Array(times).fill(str, 0, times).join('');
}

module.exports = repeatString
