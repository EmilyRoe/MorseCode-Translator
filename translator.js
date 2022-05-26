export class Morsecode {
  constructor(morseCode, morseToEnglish) {
    this.morseCode = morseCode;
    this.morseToEnglish = morseToEnglish;
  }
  translateToMorse(textInput) {
    const formattedText = textInput.toUpperCase();
    return formattedText
      .split("")
      .map((letter) => {
        console.log(this.morseCode[letter]);
        return this.morseCode[letter];
      })
      .join(" ");
  }

  translateToEnglish(textInput) {
      console.log(textInput)
    return textInput
      .split(" ")
      .map((code) => {
        // document.getElementById("translation").innerHTML=(this.morseToEnglish[code]);
        console.log(this.morseToEnglish[code])
        return this.morseToEnglish[code];
      })
      .join("");
  }
}