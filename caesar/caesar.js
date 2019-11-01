const caesar = (str, shift) => {
  shift = shift % 26;
  return [...str].map(c => {
    if (c.match(/[A-Z]/)) {
      // 'A'.charCodeAt(0) === 65
      // 'Z'.charCodeAt(0) === 90
      let code;
      if (c.charCodeAt(0) + shift > 90) {
        code = 64 + c.charCodeAt(0) + shift - 90;
      } else if (c.charCodeAt(0) + shift < 65) {
        code = 90 + c.charCodeAt(0) + shift - 64;
      } else {
        code = c.charCodeAt(0) + shift;
      }
      return String.fromCharCode(code);
    } else if (c.match(/[a-z]/)) {
      // 'a'.charCodeAt(0) === 97
      // 'z'.charCodeAt(0) === 122
      let code;
      if (c.charCodeAt(0) + shift > 122) {
        code = 96 + c.charCodeAt(0) + shift - 122;
      } else if (c.charCodeAt(0) + shift < 97) {
        code = 122 + c.charCodeAt(0) + shift - 96;
      } else {
        code = c.charCodeAt(0) + shift;
      }
      return String.fromCharCode(code);
    } else {
      return c;
    }
  }).join('');
}

module.exports = caesar
