const MissionUtils = require("@woowacourse/mission-utils");
const Computer = require('./Computer');

class Game{

    computer = new Computer();

    play(){
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
        
        MissionUtils.Console.readLine("숫자를 입력해주세요 :", (numbers) => {
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
        this.isStrike(userNumber);
    }

    isStrike(userNumbers){
        let count = 0;

        for(let i = 0;i < 3;i++){
            if(parseInt(userNumbers[i]) === this.computerNumbers[i]){
                count++;
            }
        }
    }

    isBall(userNumbers){
        const userNumber = [...userNumbers];
        let count = 0;
        userNumber.forEach((number,index) => {
            if (this.computerNumbers.includes(parseInt(number)) && this.computerNumbers[index] !== parseInt(number)) {
                count++;
            }
    
        })
    }


    

    
   
    
    
}

const game = new Game();
game.play();

module.exports = Game;