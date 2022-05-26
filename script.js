var morseCode = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F:"..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
}

var morseToEnglish = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
}

import { Morsecode } from './translator.js'

const wordToTranslate = document.querySelector(".text");

const translate = new Morsecode(morseCode, morseToEnglish)

const translateButton = document.querySelector(".translate-btn")

translateButton.addEventListener("click", () => {
    document.querySelector("#translation").innerText = translate.translateToMorse(wordToTranslate.value)
}) 

const translateToEnglishButton = document.querySelector(".translate-morse-btn")

translateToEnglishButton.addEventListener("click", () => {
    // translate.translateToEnglish(wordToTranslate.value)
    document.querySelector('#translation').innerText = translate.translateToEnglish(wordToTranslate.value)
})

// const lowerCase = document.querySelector(".text", () => {
//     if (textInput = lowerCase)
//     return valid
// }