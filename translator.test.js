import { morseCode, morseToEnglish } from './data.js';
import { Morsecode } from './translator.js';

describe("Testing the morse To English method", () => {
let translator;

    beforeEach(() => {
        translator = new Morsecode(morseCode, morseToEnglish)
      });

    test("It should be able to convert a single character", () => {
        const input = ".-";
        expect(translator.translateToEnglish(input)).toBe('A');
    })

    test("It should be able to convert a word", () => {
        const input = ".... . .-.. .-.. ---";
        expect(translator.translateToEnglish(input)).toBe('HELLO');
    })

    test("It should be able to convert a sentence", () => {
        const input = ".... . .-.. .-.. ---  - .... . .-. .  ..- ... . .-."
        expect(translator.translateToEnglish(input)).toBe('HELLO THERE USER')
    })

    test("It should only return a string", () => {
        const output = ".... . .-.. .-.. ---  - .... . .-. .  ..- ... . .-.";
        expect(typeof translator.translateToEnglish(output)).toBe("string");
    })

    // test("It should work with both uppercase and lowercase characters", () => {
    //     const input = input.toUpperCase() && input.toLowerCase();
    //     expect(translator.translateToEnglish(input)).toBe(true)
    // })
})


describe("Testing the English To Morse method", () => {
    let translator;

    beforeEach(() => {
        translator = new Morsecode(morseCode, morseToEnglish)
      });

    test("It should be able to convert a single character", () => {
        const input = "A";
        expect(translator.translateToMorse(input)).toBe('.-');
    })

    test("It should be able to convert a word", () => {
        const input = "Hello";
        expect(translator.translateToMorse(input)).toBe('.... . .-.. .-.. ---');
    })

    test("It should be able to convert a sentence", () => {
        const input = "Hello world"
        expect(translator.translateToMorse(input)).toBe(".... . .-.. .-.. --- .-- --- .-. .-.. -..")
    }) //This test doesn't work because of the spaces between hello there user

    test("It should only return a string", () => {
        const output = "";
        const translator = new Morsecode(morseCode, morseToEnglish)

        expect(translator.translateToMorse(output)).toBe("");
    })

    test("It should work with both uppercase and lowercase characters", () => {
        const input = "hEllo";
        expect(translator.translateToMorse(input)).toBe('.... . .-.. .-.. ---')
    })
})

// Issues with spacing/capitals in the tests