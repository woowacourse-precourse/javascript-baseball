const { MissionUtils } = require("@woowacourse/mission-utils");

class App {

    constructor() {
        this.computerNumber = [];
        this.gamePlayerNumber = [];
    }

    play() {
        
    }

    createRandomNumber() {
        const randomNumberList = [];
        while (computer.length < 3) {
            const randomnumber = MissionUtils.Random.pickNumberInRange(1, 9);
                if (!randomNumberList.includes(randomnumber)) {
                    randomNumberList.push(randomnumber);
            }
        }
    }

    gameStartTextPrint() {
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    }

}

module.exports = App;