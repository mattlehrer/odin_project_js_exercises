const sumAll = function(start, end) {
  if (start < 0 || end < 0 || typeof start !== 'number' || typeof end !== 'number') {
    return 'ERROR';
  }
  
  const a = Math.min(start, end);
  const b = Math.max(start, end);
  return (b * (b + 1) / 2) - ((a - 1) * a / 2);
}

module.exports = sumAll
