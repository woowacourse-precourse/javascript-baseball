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

        return [howManyStrike, howManyBall];
    }
    
    // 입력된 숫자 대조 결과 출력
    resultMessage(howManyStrike, howManyBall) {
        if (howManyStrike && !howManyBall) return MissionUtils.Console.print(`${howManyStrike}스트라이크`);
        if (!howManyStrike && howManyBall) return MissionUtils.Console.print(`${howManyBall}볼`);
        if (howManyStrike && howManyBall) return MissionUtils.Console.print(`${howManyBall}볼 ${howManyStrike}스트라이크`);
        return MissionUtils.Console.print("낫싱");
    }

    exception(usersNumber) {
        // 길이가 3자리인지 확인, 3자리 전부 일의 자리 숫자인지 확인 가능.
        if (usersNumber.length !== 3) return true;
        // 서로 다른 수인지 확인
        if (Array.from(usersNumber).length !== new Set(usersNumber.split("")).length) return true;
        if (isNaN(usersNumber)) return true;
        return false;
    }

    playGame() {    
        MissionUtils.Console.readLine("숫자를 입력해주세요 : ", usersNumber => {
            if (this.exception(usersNumber)) {
                MissionUtils.Console.close();
            }
            
            console.log(this.computersNumber);
            usersNumber = [...usersNumber].map(idx => parseInt(idx));
            console.log(usersNumber);
  
            // 볼 스트라이크 갯수 구하기, resultMessage함수 결과 출력
            const [howManyStrike, howManyBall] = this.getStrikeAndBall(this.computersNumber, usersNumber);
            this.resultMessage(howManyStrike, howManyBall);
            
            if (howManyStrike !== 3) this.playGame();
            if (howManyStrike === 3) new Computer().successMessage();
            
            MissionUtils.Console.readLine(new Computer().chooseMessage, (choice) => {
                if (!(choice === 1 || choice === 2)) {
                    MissionUtils.Console.close();
                }
                if (choice === 1) {
                    this.computersNumber = new Computer().pickedNum();
                    this.playGame();
                }
                if (choice === 2) {
                    MissionUtils.Console.close();
                }
            })

        });
    }
}

const game = new Game;
game.playGame();

module.exports = Game;
