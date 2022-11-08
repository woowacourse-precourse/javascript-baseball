const ERROR_MESSAGE = require("./ErrorMessage.js");

class Validtion {
    constructor(){
        this.userNumberArray = [];
    }
    isValidationUserBallInput(userNumberArray){
        this.userNumberArray = userNumberArray;
        
        if(this.isNotANumber()){
            throw ERROR_MESSAGE.NOT_A_POSITIVE_NUMBER_ERROR;
        }
    }

    isNotANumber(){
        return this.userNumberArray.includes(NaN)
    }
    
}

module.exports = Validtion;