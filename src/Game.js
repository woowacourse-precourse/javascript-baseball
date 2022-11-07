const MissionUtils = require("@woowacourse/mission-utils");
const Computer = require('./Computer');
const Validation = require('./Validation')

class Game{

    computer = new Computer();
    validation = new Validation();

    gamePlay(){
        this.loadComputerNumbers();
        this.getUserInput();
    }

    constructor(){
        this.computerNumbers = [];
    }

    loadComputerNumbers(){
        this.computer.setComputerNumbers();
        this.computerNumbers = this.computer.getComputerNumbers();
    }


    getUserInput() {
        MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (numbers) => {
            this.validation.checkValidation(numbers);
            this.compareNumber(numbers);
        });
    }

    isStrike(userNumbers){
        let count = 0;

        for(let i = 0;i < 3;i++){
            if(parseInt(userNumbers[i]) === this.computerNumbers[i]){
                count++;
            }
        }
        return count;
    }

    isBall(userNumbers){
        let count = 0;
        userNumbers.forEach((number,index) => {
            if (this.computerNumbers.includes(parseInt(number)) && this.computerNumbers[index] !== parseInt(number)) {
                count++;
            }
        })
        return count;
    }

    compareNumber(userNumber) {
        const USERNUMBERS = [...userNumber];
        const STRIKE = this.isStrike(USERNUMBERS);
        const BALL = this.isBall(USERNUMBERS);
        let message = "";
    
        if (BALL === 0 && STRIKE === 0) {
            message = "낫싱";
        }
        if (BALL > 0) {
            message = BALL + "볼" + " ";
        }
        if (STRIKE > 0) {
            message += STRIKE + "스트라이크";
        }
        MissionUtils.Console.print(message);
        if (STRIKE === 3) {
            MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
            MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
            MissionUtils.Console.readLine("",(num) => {
                this.afterGameEnd(num);
            })
        }
        else{
            this.getUserInput();
        }
    }

    afterGameEnd(num){
        if(num == '1'){
            this.gamePlay();
        }
        else if(num == '2'){
            MissionUtils.Console.print("게임 종료");
            MissionUtils.Console.close();
        }
        else{
            throw "1 또는 2를 입력 해주세요."
        }
    }
}

module.exports = Game;