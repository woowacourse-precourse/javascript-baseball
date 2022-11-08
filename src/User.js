const { NUMBER, STRING } = require('./Const.js');

class User {
    isInputValid(userGuess) {
        if(isNaN(userGuess) || !Number.isInteger(Number(userGuess))) return false;
    
        if(userGuess.length !== NUMBER.MAX_LENGTH) return false;
    
        if(new Set([...userGuess]).size !== NUMBER.MAX_LENGTH) return false;
    
        if([...userGuess].includes(STRING.ZERO)) return false;
    
        return true;
    }
}

module.exports = User;