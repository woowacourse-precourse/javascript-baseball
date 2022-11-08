const MISSIONUTILS_IO = require("@woowacourse/mission-utils");
const Validation = require("./Validtion.js");

const TEXTS = Object.freeze({
    START_TEXT: "숫자 야구 게임을 시작합니다.",
    INPUT_TEXT: "숫자를 입력해주세요 : ",
    END_TEXT: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    RESELECT_TEXT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
});

const RESULT = Object.freeze({
    STRIKE: "스트라이크",
    BALL: "볼", 
    NOTHING: "낫싱"
});

const THREE_STRIKE = 3;

const BUTTON = Object.freeze({
    재시작: "1",
    종료: "2", 
});

class Game {
    constructor() {
        this.utilsIo = MISSIONUTILS_IO.Console;
        this.utilsRandom = MISSIONUTILS_IO.Random;
        this.utilsIo.print(TEXTS.START_TEXT);
        
        this.userNumberArray = [];
        this.compareNumberArray = [];

        this.validation = new Validation();
    }

    makeComputerNumer() {
        const computer = [];
        while (computer.length < 3) {
            const number = this.utilsRandom.pickNumberInRange(1, 9);
            if (!computer.includes(number)) { 
                computer.push(number); 
            }
        }
        this.compareNumberArray = computer;
    }

    inputGame(text, callback) {
        this.utilsIo.readLine(text, callback.bind(this));
    }

    startGame() {
        this.makeComputerNumer();
        this.inputGame(TEXTS.INPUT_TEXT, this.onGame);
    }

    onGame(input) {
        this.userNumberArray = input.split("").map(Number);
        this.validation.isValidationUserBallInput(this.userNumberArray);

        const ball = this.countBall();
        const strike = this.countStrike();
        this.utilsIo.print(this.showResult(ball, strike));

        if(this.isThreeStrike(strike)) { this.endGame(); }
        this.inputGame(TEXTS.INPUT_TEXT, this.onGame);
    }

    endGame(){
        this.utilsIo.print(TEXTS.END_TEXT);
        this.inputGame(TEXTS.RESELECT_TEXT, this.reselectButton);
    }

    countBall(){
        let ball = 0;
        this.userNumberArray.map((userNumber, index)=>{
            let sameNumberComputerIndex = this.compareNumberArray.indexOf(userNumber);
            if(sameNumberComputerIndex !== -1 && sameNumberComputerIndex !== index){ ball++; }
        })
        return ball;
    }

    countStrike(){
        let strike = 0;
        this.userNumberArray.map((userNumber, index)=>{
        if(userNumber === this.compareNumberArray[index]){ strike++; }
        })
        return strike;
    }

    showResult(ball, strike){
        if(ball == 0 && strike == 0) return RESULT.NOTHING;
        if(ball > 0 && strike == 0) return `${ball}${RESULT.BALL}`;
        if(ball == 0 && strike > 0) return `${strike}${RESULT.STRIKE}`;
        if(ball > 0 && strike > 0) return `${ball}${RESULT.BALL} ${strike}${RESULT.STRIKE}`;
    }

    isThreeStrike(strike){
        return strike === THREE_STRIKE;
    }

    reselectButton(input){
        this.validation.isValidationUserReselectButtonInput(input);
    
        if(input === BUTTON.재시작){
            this.startGame();
        }
        if(input == BUTTON.종료){
            this.utilsIo.close();
        }
    }
}

module.exports = Game