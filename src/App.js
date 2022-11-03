const MissionUtils = require("@woowacourse/mission-utils");

class App {
    PICKED_NUMBERS = [];
    play() {
        this.start();
    }
    start() {
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
        this.PICKED_NUMBERS = this.getRandomNumber();
    }
    getRandomNumber() {
        const picks = [];
        for (let i = 0; i < 3; i++) {
            let now = MissionUtils.Random.pickNumberInRange(1, 9);
            picks.push(now);
        }
        return picks;
    }
    getInput() {
        MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {});
    }
}

module.exports = App;
