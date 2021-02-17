class TheSecret {
  constructor() {
    this.secret = [
      // Alphabet
      "&*",
      "%<",
      "}/",
      "(-",
      "#$",
      "!m",
      ";P",
      "=)",
      "X-",
      "^+",
      "E%",
      "m0",
      "z*",
      "~3",
      ",F",
      "##",
      "+=",
      "jj",
      "']",
      "i!",
      "b*",
      "5t",
      "l+",
      "!@",
      ".'",
      "#,",
      // Big alphabet
      ";'",
      "{}",
      "-I",
      "f^",
      "[+",
      "cC",
      "78",
      "9;",
      "0Z",
      "uP",
      "Q5",
      "<'",
      "t^",
      "i2",
      "x6",
      "N}",
      "MM",
      "?!",
      "#4",
      "xF",
      "b$",
      "4%",
      "c(",
      "<-",
      "A+",
      "][",
      // space & others
      "V&",
      "O!",
      "-+",
      "}{",
      "<`",
      "T$",
      // Numbers
      "Cw",
      "-L",
      "E!",
      "b>",
      "?'",
      "v+",
      "?.",
      "qE",
      "x&",
      "+1",
    ];
    this.alpha = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      // ----------
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      // ---------
      " ",
      "{",
      '"',
      ":",
      "}",
      ",",
      // -------
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];
  }
  transform(text) {
    let done = "";
    let textToArry = [];
    let newText = "";
    const turn = (res, rej) => {
      if (typeof text === "object" && text !== null) {
        newText = JSON.stringify(text);
      } else {
        newText = text;
      }
      for (let x = 0; x < newText.length; x++) {
        textToArry.push(newText.charAt(x));
      }

      for (let i = 0; i < textToArry.length; i++) {
        for (let j = 0; j < this.alpha.length; j++) {
          if (textToArry[i] == this.alpha[j]) {
            textToArry[i] = this.secret[j];
            done += textToArry[i];
          }
        }
      }
      res(done);
    };
    return new Promise(turn);
  }

  transformBack(text) {
    let done = "";
    let textToArry = [];
    const turn = (res, rej) => {
      for (let x = 0; x < text.length; x++) {
        textToArry.push(text.charAt(x) + text.charAt(x + 1));
      }

      for (let i = 0; i < textToArry.length; i++) {
        for (let j = 0; j < this.secret.length; j++) {
          if (textToArry[i] == this.secret[j]) {
            textToArry[i] = this.alpha[j];
            done += textToArry[i];
          }
        }
      }
      if (
        /^[\],:{}\s]*$/.test(
          done
            .replace(/\\["\\\/bfnrtu]/g, "@")
            .replace(
              /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
              "]"
            )
            .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
        )
      ) {
        const myObj = JSON.parse(done);
        res(myObj);
      } else {
        res(done);
      }
    };
    //console.log(done);
    return new Promise(turn);
  }
}

module.exports = new TheSecret();
