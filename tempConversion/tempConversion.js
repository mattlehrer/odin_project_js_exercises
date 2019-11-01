const ftoc = function(temp) {
  const precise = (temp - 32) * 5 / 9;
  const str = String(precise);
  if (str.includes('.')) {
    return Number((precise).toFixed(1));
  }
  return precise;
}

const ctof = function(temp) {
  const precise = temp * 9 / 5 + 32;
  const str = String(precise);
  if (str.includes('.')) {
    return Number((precise).toFixed(1));
  }
  return precise;
}

module.exports = {
  ftoc,
  ctof
}
