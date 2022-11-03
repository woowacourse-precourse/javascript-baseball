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
        MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
            this.checkInput(input, 3);
        });
    }
    checkInput(input, len) {
        if (input.length !== len) throw `입력은 ${len}개여야 합니다.`;
        if (isNaN(input)) throw "입력은 숫자여야 합니다.";
        if (
            len === 3 &&
            (input[0] === input[1] ||
                input[1] === input[2] ||
                input[0] === input[2])
        )
            throw "입력은 서로 달라야 합니다.";
        if (len === 3) this.countInput(input.split("").map(Number));
    }
}

module.exports = App;
