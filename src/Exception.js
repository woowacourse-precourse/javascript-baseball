class Exception {
    constructor(input, type) {
        this.input = input;
        // type이 1이면, input
        // type이 2이면 replay input
        this.type = type;
    }
    checkInputException() {
        this.isThreeLength(this.input);
        this.isDuplication(this.input);
        this.isHaveZero(this.input);
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
}

module.exports = Exception;
