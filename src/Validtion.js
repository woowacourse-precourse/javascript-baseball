const ERROR_MESSAGE = require("./ErrorMessage.js");

class Validtion {
    constructor(){
        this.userNumberArray = [];
        this.buttonNumber = 0;
    }
    isValidationUserBallInput(userNumberArray){
        this.userNumberArray = userNumberArray;
        
        if(this.isNotANumber()){
            throw ERROR_MESSAGE.NOT_A_POSITIVE_NUMBER_ERROR;
        }
        if(this.isNotValidSize()){
            throw ERROR_MESSAGE.SIZE_ERROR;
        }
        if(this.isOverLap()){
            throw ERROR_MESSAGE.OVERLAP_ERROR;
        }
    }
    isValidationUserReselectButtonInput(buttonNumber){
        this.buttonNumber = buttonNumber;
        if(this.isNotButton()){
            throw ERROR_MESSAGE.NOT_BUTTON_ERROR;
        }
    }
    isNotANumber(){
        return this.userNumberArray.includes(NaN)
    }
    isNotValidSize(){
        return this.userNumberArray.length !== 3
    }
    isOverLap(){
        const userNumberSet = new Set(this.userNumberArray);
        return userNumberSet.size < 3;
    }
    isNotButton(){
        return !(this.buttonNumber === "1" || this.buttonNumber == "2")
    }
}

module.exports = Validtion;