const removeFromArray = function(arr, ...toRemove) {
  toRemove.map(x => {
    if (arr.indexOf(x) > -1) arr.splice(arr.indexOf(x), 1)
  });
  return arr;
}

module.exports = removeFromArray
