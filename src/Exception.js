class Exception {
    /** @typedef {('process' | 'replay')} type */
    /** @type {function (string, type) : void} */
    constructor(input, type) {
        this.input = input;
        this.type = type;
    }
    checkInputException() {
        this.isThreeLength(this.input);
        this.isDuplication(this.input);
        this.isHaveZero(this.input);
        this.isNumber(this.input);
    }
    checkReplayInputException() {
        this.isOneOrTwo(this.input);
    }
    isThreeLength(input) {
        if (input.length !== 3) throw new Error();
    }
    isDuplication(input) {
        const inputSet = [...new Set(input.split(''))];

        if (inputSet.length !== 3) throw new Error();
    }
    isHaveZero(input) {
        for (let number of input) {
            if (number === '0') throw new Error();
        }
    }
    isOneOrTwo(input) {
        if (input !== '1' && input !== '2') throw new Error();
    }
    isNumber(input) {
        [...input].forEach((num) => {
            if (isNaN(+num)) throw new Error();
        });
    }
}

module.exports = Exception;
