class User {
    isInputValid(userGuess) {
        if(isNaN(userGuess) || !Number.isInteger(Number(userGuess))) return false;
    
        if(userGuess.length !== 3) return false;
    
        if(new Set([...userGuess]).size !== 3) return false;
    
        if([...userGuess].includes('0')) return false;
    
        return true;
    }
}

module.exports = User;