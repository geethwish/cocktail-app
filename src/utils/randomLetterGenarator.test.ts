import { generateRandomLetter } from "./randomLetterGenarator";

describe('Random Letter Generator Function', () => {

    it('should not be empty', () => {
        const randomLetter = generateRandomLetter()
        expect(randomLetter).not.toBe(null);
    });

    it('Return value should be string', () => {
        const randomLetter = generateRandomLetter()
        expect(typeof randomLetter).toEqual("string")
    });

});