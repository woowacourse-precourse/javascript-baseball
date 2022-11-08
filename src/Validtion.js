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
        if(this.isOverLap()){
            throw ERROR_MESSAGE.OVERLAP_ERROR;
        }
    }

    isNotANumber(){
        return this.userNumberArray.includes(NaN)
    }
        isNotANumber(){
        return this.userNumberArray.includes(NaN)
    }
    isOverLap(){
        const userNumberSet = new Set(this.userNumberArray);
        return userNumberSet.size < 3;
    }
    
}

module.exports = Validtion;