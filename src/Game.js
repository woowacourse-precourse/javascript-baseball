const MissionUtils = require("@woowacourse/mission-utils");
const Computer = require("./Computer");

class Game {
    constructor() {
        this.startMessage = new Computer().startMessage();
        this.computersNumber = new Computer().pickedNum();
    }

    // 유저와 컴퓨터 대조해서 스트라이크 볼 갯수 리턴
    getStrikeAndBall(computersNumber, usersNumber) {
        let howManyStrike = 0;
        let howManyBall = 0;

        usersNumber.forEach((number, idx) => {
            if (number === computersNumber[idx]) howManyStrike++;
            if (number !== computersNumber[idx] && computersNumber.includes(number)) howManyBall++;
        });

        return this.resultMessage(howManyStrike, howManyBall);
    }
    
    // 입력된 숫자 대조 결과 출력
    resultMessage(howManyStrike, howManyBall) {
        if (howManyStrike && !howManyBall) return MissionUtils.Console.print(`${howManyStrike}스트라이크`);
        if (!howManyStrike && howManyBall) return MissionUtils.Console.print(`${howManyBall}볼`);
        if (howManyStrike && howManyBall) return MissionUtils.Console.print(`${howManyBall}볼 ${howManyStrike}스트라이크`);
        return MissionUtils.Console.print("낫싱");
    }

    playGame() {    
        MissionUtils.Console.readLine("숫자를 입력해주세요 : ", usersNumber => {
            console.log(this.computersNumber);
            usersNumber = [...usersNumber].map(idx => parseInt(idx));
            console.log(usersNumber);

            // 볼 스트라이크 갯수 구하기, resultMessage함수 결과 출력
            this.getStrikeAndBall(this.computersNumber, usersNumber);
            

            
            return ;
        });

        return;
    }
}

const game = new Game;
game.playGame();

module.exports = Game;
