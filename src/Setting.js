const MissionUtils = require("@woowacourse/mission-utils");

class Setting {
    constructor() {
        this.restart = null;
        this.computerNum = this.setComputerNumber();
    }

    setComputerNumber() {
        const computerNum = [];
        while (computerNum.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computerNum.includes(number)) {
                computerNum.push(number);
            }
        }
        return computerNum;
    }

    restartGame() {
        MissionUtils.Console.print("게임을 시작하려면 1, 종료하려면 2를 입력하세요.");

        let restart;
        MissionUtils.Console.readLine("", (answer) => {
            if (answer !== "1" && answer !== "2") throw "잘못된 문자를 입력하였습니다. 프로그램을 종료합니다.";

            restart = answer;
        });

        this.restart = restart;
    }
}

module.exports = Setting;