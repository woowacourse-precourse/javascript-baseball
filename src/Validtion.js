const ERROR_MESSAGE = require("./ErrorMessage.js");
const BALL_COUNT = 3;
const BUTTON = Object.freeze({
    재시작: "1",
    종료: "2", 
});

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
        return this.userNumberArray.length !== BALL_COUNT
    }
    isOverLap(){
        const userNumberSet = new Set(this.userNumberArray);
        return userNumberSet.size < BALL_COUNT;
    }
    isNotButton(){
        return !(this.buttonNumber === BUTTON.재시작 || this.buttonNumber == BUTTON.종료)
    }
}

module.exports = Validtion;