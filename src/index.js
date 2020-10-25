const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let i = 0;
  let res = "";
  let morse = "";
  let additional = expr.split("");
  const keys = Object.keys(MORSE_TABLE);
  const values = Object.values(MORSE_TABLE);

  while (i < additional.length) {

    if (i % 10 == 0) {
      if(morse != ''){
        res += values[keys.indexOf(morse)];
        morse = "";
      }
    }
    if(additional[i] == '*'){
        res += ' ';
        i += 10;
    }
    if (additional[i] == "0" && additional[i] == additional[i + 1]) {
      i += 2;
      continue;
    }
    if (additional[i] + additional[i + 1] == "11") {
      morse += "-";
      i += 2;
      continue;
    }
    if (additional[i] + additional[i + 1] == "10") {
      morse += ".";
      i += 2;
      continue;
    }
  }
  res += values[keys.indexOf(morse)];
  return res;
}

module.exports = {
  decode,
};

