const palindromes = function(str) {
  const arr = [...str.trim().toLowerCase()].filter(c => c.match(/[a-z]/));
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) return false;
  }
  return true;
}

module.exports = palindromes
