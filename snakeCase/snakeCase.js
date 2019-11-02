const snakeCase = function(str) {
  if (str.match(/[A-Z]/g) && str.match(/[A-Z]/g).length > str.match(/[a-z]/g).length) {
    return [...str
      .match(/[a-z].*[a-z]/i)[0] // trim spaces and punctuation
      .replace(/[,\.-]/g, ' ')
      .trim()
      .replace(/ +/g, ' ')
      .split(' ')]
      .join('_')
      .toLowerCase();
  }
  return [...str
    .match(/[a-z].*[a-z]/i)[0] // trim spaces and punctuation
    .replace(/[,\.-]/g, ' ')
    .replace(/[A-Z]/g, ' $&')
    .trim()
    .replace(/ +/g, ' ')
    .split(' ')]
    .join('_')
    .toLowerCase();
}

module.exports = snakeCase
