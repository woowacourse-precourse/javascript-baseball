const MissionUtils = require("@woowacourse/mission-utils");
const Computer = require("./Computer");

class Game {
    constructor() {
        this.startMessage = new Computer().startMessage();
        this.computersNumber = new Computer().pickedNum();
    }
    
  

    playGame() {    
        MissionUtils.Console.readLine("숫자를 입력해주세요 : ", userNumber => {
            const howManyStrike = this.getStrike(this.computersNumber, userNumber);
            const howManyBall = this.getBall(this.computersNumber, userNumber);
            const compareResult = this.compareBallStrike(howManyStrike, howManyBall);

            console.log(compareResult);
            return compareResult;
        });
    }

    // 유저와 컴퓨터 대조해서 스트라이크 갯수 리턴
    getStrike(computersNumber, userNumber) {
        let howManyStrike = 0;

        for (let i = 0; i < 3; i++) {
            if (computersNumber[i] === userNumber[i]) howManyStrike = howManyStrike + 1;
        }

        return howManyStrike;
    }
    
    // 유저와 컴퓨터 대조해서 볼 갯수 리턴
    getBall(computersNumber, userNumber) {
        let howManyBall = 0;

        for (let i = 0; i < 3; i++) {
            if (computersNumber[i] != userNumber[i] && computersNumber.include(userNumber[i])) howManyBall = howManyBall + 1;
        }
        
        return howManyBall;
    }

    // 입력된 숫자 대조 결과 리턴
    compareBallStrike() {

    }
}

const game = new Game;
game.playGame();

module.exports = Game;
