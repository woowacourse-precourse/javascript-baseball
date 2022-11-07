class Validate {
    isValid(userGuess) {

        if (userGuess.length !== 3) {
            return false;
        }
        if ([...userGuess].includes('0')) {
            return false;
        }
        if (new Set([...userGuess]).size !== 3) {
            return false;
        }
        if (isNaN(userGuess) || !Number.isInteger(Number(userGuess))) {
            return false;
        }
        else {
            return true;
        }
    }
}

module.exports = Validate;