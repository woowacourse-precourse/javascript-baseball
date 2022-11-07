const MissionUtils = require("@woowacourse/mission-utils");
const Computer = require("./Computer");
const exception = require("./Exception");

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

        return [howManyStrike, howManyBall];
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
            exception(usersNumber);

            console.log(this.computersNumber);
            usersNumber = [...usersNumber].map(idx => parseInt(idx));
            console.log(usersNumber);
  
            // 볼 스트라이크 갯수 구하기, resultMessage함수 결과 출력
            const [howManyStrike, howManyBall] = this.getStrikeAndBall(this.computersNumber, usersNumber);
            this.resultMessage(howManyStrike, howManyBall);
            
            if (howManyStrike !== 3) this.playGame();
            if (howManyStrike === 3) this.getRightAnswer();
        });
    }
    
    getRightAnswer() {
        new Computer().successMessage();
        MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (choice) => {
            if (choice === "1") this.pickedRestart();
            if (choice === "2") this.pickedClose();
            // this.pickedWrongChoice();
        });
    }

    pickedWrongChoice() {
        MissionUtils.Console.close();
        throw new Error("잘못된 수를 입력하셨습니다.")
    }

    pickedRestart() {
        this.computersNumber = new Computer().pickedNum();
        this.playGame();
        return ;
    }

    pickedClose() {
        MissionUtils.Console.close();
        return ;
    }

}

const game = new Game;
game.playGame();

module.exports = Game;
