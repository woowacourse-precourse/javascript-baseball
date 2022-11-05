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

    makeAnswer = () => {
        let answer;

        do {
            answer = MissionUtils.Random.pickNumberInRange(100, 999).toString();
        } while (this.isDuplicate(answer));

        return answer;
    };

    printResult = (input, ANSWER) => {
        if (input === ANSWER) {
            this.printSuccessMsg();
            return;
        }

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
    };

    printSuccessMsg = () => {
        MissionUtils.Console.readLine(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
            (input) => {
                if (input === "1") this.play();
                else if (input === "2") MissionUtils.Console.close();
            }
        );
    };

    getUserInputAndCompare = (ANSWER) => {
        MissionUtils.Console.readLine("숫자를 입력해 주세요 : ", (input) => {
            this.printResult(input, ANSWER);
            this.getUserInputAndCompare(ANSWER);
        });
    };

    play = () => {
        MissionUtils.Console.print("숫자야구 게임을 시작합니다.");
        const ANSWER = this.makeAnswer();
        console.log(ANSWER);
        this.getUserInputAndCompare(ANSWER);
    };
}

const app = new App();
app.play();
module.exports = App;
