const MissionUtils = require("@woowacourse/mission-utils");

const changeToArray = (number) => {
    return number
        .toString()
        .split("")
        .map((num) => parseInt(num), 10);
};
class App {
    printStartMassage() {
        MissionUtils.Console.print(`숫자 야구 게임을 시작합니다.`);
    }
    play() {
        this.printEndMessage();
        let answer = this.createAnswer();
        // console.log(answer);
        this.getUserInput(answer);
    }
    createAnswer() {
        return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    }

    isCorrect(userInput, answer) {
        return userInput.join("") === answer.join("");
    }

    getBallCount(userInput, answer) {
        const IS_TRUE = userInput.map((num, index) => num === answer[index]);
        let ball = 0;
        userInput.forEach((num, index) => {
            if (!IS_TRUE[index] && answer.includes(num)) {
                ball += 1;
            }
        });
        return ball;
    }

    getStrikeCount(userInput, answer) {
        let strike = 0;
        userInput.forEach((num, index) => {
            if (num === answer[index]) {
                strike += 1;
            }
        });

        return strike;
    }

    printMassage(massage) {
        return MissionUtils.Console.print(massage);
    }

    inputResult(userInput, answer) {
        const BALL = this.getBallCount(userInput, answer);
        const STRIKE = this.getStrikeCount(userInput, answer);
        if (BALL === 0 && STRIKE === 0) {
            return this.printMassage("낫싱");
        }
        if (BALL === 0) {
            return this.printMassage(`${STRIKE}스트라이크`);
        }
        if (STRIKE === 0) {
            return this.printMassage(`${BALL}볼`);
        }

        return this.printMassage(`${BALL}볼 ${STRIKE}스트라이크`);
    }

    printEndMessage() {
        this.printMassage(`3스트라이크`);
        this.printMassage("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }

    choosesNextStep() {
        this.printMassage("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
        MissionUtils.Console.readLine("", (number) => {
            if (number === "1") {
                this.play();
            }
            if (number === "2") {
                MissionUtils.Console.close();
            }
        });
    }

    getUserInput(answer) {
        MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
            const INPUT_ARRAY = changeToArray(input);
            if (this.isCorrect(INPUT_ARRAY, answer)) {
                this.printEndMessage();
                return this.choosesNextStep();
            }

            this.inputResult(INPUT_ARRAY, answer);
            this.getUserInput(answer);
        });
    }
}

const app = new App();

app.printStartMassage();
app.play();

module.exports = App;
