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
        if (len === 1 && (Number(input) < 1 || Number(input) > 2))
            throw "입력은 1 또는 2여야 합니다.";
        if (
            len === 3 &&
            (input[0] === input[1] ||
                input[1] === input[2] ||
                input[0] === input[2])
        )
            throw "입력은 서로 달라야 합니다.";
        if (len === 3) this.countInput(input.split("").map(Number));
        else this.restart(Number(input));
    }
    countInput(arr) {
        let BALLS = 0;
        let STRIKES = 0;
        for (let i = 0; i < 3; i++) {
            if (arr[i] === this.PICKED_NUMBERS[i]) STRIKES++;
            else if (arr[i] === this.PICKED_NUMBERS[(i + 1) % 3]) BALLS++;
            else if (arr[i] === this.PICKED_NUMBERS[(i + 2) % 3]) BALLS++;
        }
        this.printResult([BALLS, STRIKES]);
    }
    printResult(res) {
        if (res[1] === 3) {
            MissionUtils.Console.print(
                "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
            );
            this.checkRetry();
        } else {
            if (res[0] === 0 && res[1] === 0)
                MissionUtils.Console.print("낫싱");
            else
                MissionUtils.Console.print(
                    `${res[0] > 0 ? res[0] + "볼 " : ""}${
                        res[1] > 0 ? res[1] + "스트라이크" : ""
                    }`.trimEnd()
                );
            this.getInput();
        }
    }
    checkRetry() {
        MissionUtils.Console.print(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        );
        MissionUtils.Console.readLine("", (input) => {
            this.checkInput(input, 1);
        });
    }
}

module.exports = App;
