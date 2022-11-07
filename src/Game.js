const MissionUtils = require("@woowacourse/mission-utils");
const Computer = require('./Computer');

class Game{

    computer = new Computer();

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
            this.checkValidationUserInput(numbers);
        });
    }

    checkValidationUserInput(userNumber) {
        if (isNaN(userNumber) === true) {
          throw "숫자를 입력해주세요.";
        }
        if (userNumber.length !== 3) {
          throw "3자리로 입력해주세요.";
        }
        if (new Set(userNumber).size !== 3) {
          throw "서로 다른 값을 입력해주세요.";
        }
        if(userNumber.includes('0') === true){
            throw "0은 입력하면 안됩니다.";
        }
        this.compareNumber(userNumber);
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
        const userNumbers = [...userNumber];
        const strike = this.isStrike(userNumbers);
        const ball = this.isBall(userNumbers);
        let message = "";
    
        if (ball === 0 && strike === 0) {
            message = "낫싱";
        }
        if (ball > 0) {
            message = ball + "볼" + " ";
        }
        if (strike > 0) {
            message += strike + "스트라이크";
        }
        MissionUtils.Console.print(message);
        if (strike === 3) {
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