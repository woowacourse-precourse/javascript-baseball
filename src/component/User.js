const { NOTICE, OPTION } = require("../message");

class User {
    constructor() {
        this.number = [];
    }

    setNumberArray(userInput) {
        const userNumberArray = userInput.split("");
        if (this.checkValidInput(userNumberArray)) {
            this.number = userInput.split("");
        }
    }

    checkValidInput(userInput) {
        if (this.hasZero(userInput) || this.hasSameNumber(userInput) || this.hasRightLength(userInput) || this.hasWrongWord(userInput)) {
            throw new Error(NOTICE.ERROR);
        }
        return true;
    }
    hasZero(userInput) {
        return userInput.includes("0");
    }
    hasSameNumber(userInput) {
        const setInput = new Set(userInput);
        return setInput.size !== userInput.length;
    }
    hasRightLength(userInput) {
        return userInput.length !== OPTION.PITCH_COUNT;
    }
    hasWrongWord(userInput) {
        return !(userInput.join("") > OPTION.MINIMUM_INPUT_RANGE);
    }
}

module.exports = User;
