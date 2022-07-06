import { Morsecode } from './translator.js'
import { morseCode, morseToEnglish } from './data.js';

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