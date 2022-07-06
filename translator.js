export class Morsecode {
  constructor(morseCode, morseToEnglish) {
    this.morseCode = morseCode;
    this.morseToEnglish = morseToEnglish;
  }
  translateToMorse(textInput) {
    const formattedText = textInput.toUpperCase().trim().replace(" ", "");
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
      const stringCharacters = textInput.split(" ");
      console.log(stringCharacters)
      let convertedCharacters = stringCharacters.map(character => {
        return this.morseToEnglish[character];
      }).join("");
      return convertedCharacters;
  }
}