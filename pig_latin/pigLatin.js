function translate(str) {
  return str.split(' ').map(w => {
    let vowel = w.match(/[aeiou]/)[0];
    if (vowel === 'u' && w.indexOf(vowel) > 0 && w[w.indexOf(vowel) - 1] === 'q') {
      vowel = w[w.indexOf(vowel) + 1];
    }
    return `${w.slice(w.indexOf(vowel),w.length)}${w.slice(0, w.indexOf(vowel))}ay`;
  }).join(' ');
}


module.exports = {
	translate
}

