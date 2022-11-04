const MissionUtils = require("@woowacourse/mission-utils");

class App {
    constructor() {
        this.computer = [];
    }

    getRandomNumber() {
        while (this.computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!this.computer.includes(number)) {
                this.computer.push(number);
            }
        }
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    }

    play() {}
}

module.exports = App;
