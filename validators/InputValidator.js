const MESSAGE = require('../constants/gameMessages');
const NUMBER = require('../constants/gameSetting');

class InputValidator {

    static checkExceptNumber (answer) {
        if(answer?.split('').map(Number)
        .includes(NUMBER.EXCEPT)) throw new Error(MESSAGE.GAME.ERROR);
        
    }

    static checkNumber (answer) {
        if(isNaN(answer)) throw new Error(MESSAGE.GAME.ERROR);
    }

    static checkThreeNumber (answer) {
        if(answer?.toString().length !== NUMBER.RANDOM_LENGTH) throw new Error(MESSAGE.GAME.ERROR);
        
    }

    static checkDuplication (answer) {
        const inputList = answer?.split('');
        const setCollection = new Set(inputList);
        if(setCollection.size !== inputList?.length) throw new Error(MESSAGE.GAME.ERROR);
    }

    static checkBaseballNumber (number) {
        this.checkExceptNumber(number);
        this.checkNumber(number);
        this.checkThreeNumber(number);
        this.checkDuplication(number);
    }

    static checkInputRestartExit (input) {
        if (input === NUMBER.RESTART) return true;
        if (input === NUMBER.EXIT) return false;
        throw new Error(MESSAGE.GAME.ERROR);
    }

}

module.exports = InputValidator;