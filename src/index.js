module.exports = function toReadable(number) {
  const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "hundred"];
  const scale = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion"];

  if (number == 0) return "zero";
  number = ("0".repeat(2 * (number += "").length % 3) + number).match(/.{3}/g);
  if (number.length > scale.length) return "Too Large";
  let out = ""; return number.forEach((Triplet, pos) => {
    if (+Triplet) {
      out += ' ' + (+Triplet[0] ? ones[+Triplet[0]] + ' ' + tens[10] : "") +
        ' ' + (+Triplet.substr(1) < 20 ? ones[+Triplet.substr(1)] :
          tens[+Triplet[1]] + (+Triplet[2] ? " " : "") + ones[+Triplet[2]]) +
        ' ' + scale[number.length - pos - 1];
    }
  }), out.replace(/\s+/g, ' ').trim();
};


