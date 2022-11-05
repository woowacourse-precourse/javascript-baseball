const MissionUtils = require("@woowacourse/mission-utils");
class App {
    constructor() {}

    isDuplicate = (string) => {
        return (
            string[0] === string[1] ||
            string[1] === string[2] ||
            string[2] === string[0]
        );
    };

    checkInputIsValid = (string) => {
        if (
            !Number.isInteger(Number(string)) ||
            string.length !== 3 ||
            Number(string) < 102 ||
            987 < Number(string) ||
            this.isDuplicate(string)
        ) {
            throw new Error();
        }
    };

    makeAnswer = () => {
        const computer = [];
        while (computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }

        return computer.join("");
    };

    printResult = (input, ANSWER) => {
        let strike = 0,
            ball = 0,
            out = true;

        for (let i = 0; i < ANSWER.length; i++) {
            if (ANSWER.includes(input[i])) {
                out = false;
                input[i] === ANSWER[i] ? strike++ : ball++;
            }
        }

        if (out) {
            MissionUtils.Console.print("낫싱");
            return;
        }
        let msg = "";
        if (ball) msg += `${ball}볼 `;
        if (strike) msg += `${strike}스트라이크`;
        MissionUtils.Console.print(msg);
        strike === 3 && this.printSuccessMsg();
    };

    printSuccessMsg = () => {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        MissionUtils.Console.readLine(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
            (input) => {
                if (input === "1") this.play();
                else if (input === "2") {
                    MissionUtils.Console.close();
                    return;
                } else throw new Error();
            }
        );
    };

    getUserInputAndCompare = (ANSWER) => {
        MissionUtils.Console.readLine("숫자를 입력해 주세요 : ", (input) => {
            this.checkInputIsValid(input);
            this.printResult(input, ANSWER);
            this.getUserInputAndCompare(ANSWER);
        });
    };

    play = () => {
        MissionUtils.Console.print("숫자야구 게임을 시작합니다.");
        const ANSWER = this.makeAnswer();
        this.getUserInputAndCompare(ANSWER);
    };
}

const app = new App();
app.play();
module.exports = App;
