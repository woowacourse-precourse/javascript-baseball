const { Console, Random } = require("@woowacourse/mission-utils");
const changeToArray = require("../utils/changeToArray");
class App {
    constructor() {
        this.isFirst = true;
    }

    play() {
        this.printStartMassage();
        const answer = this.createAnswer();
        this.userPlayGame(answer);
    }

    printStartMassage() {
        this.isFirst && Console.print(`숫자 야구 게임을 시작합니다.`);
    }

    createAnswer() {
        const answerArray = [];
        while (answerArray.length < 3) {
            const number = Random.pickNumberInRange(1, 9);
            if (!answerArray.includes(number)) answerArray.push(number);
        }
        return answerArray;
    }

    isCorrect(userInput, answer) {
        return userInput.join("") === answer.join("");
    }

    getBallCount(userInput, answer) {
        const isTrue = userInput.map((num, index) => num === answer[index]);
        let ball = 0;
        userInput.forEach((num, index) => {
            if (!isTrue[index] && answer.includes(num)) {
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

    inputResult(userInput, answer) {
        const ball = this.getBallCount(userInput, answer);
        const strike = this.getStrikeCount(userInput, answer);
        if (ball === 0 && strike === 0) {
            return Console.print("낫싱");
        }
        if (ball === 0) {
            return Console.print(`${strike}스트라이크`);
        }
        if (strike === 0) {
            return Console.print(`${ball}볼`);
        }

        return Console.print(`${ball}볼 ${strike}스트라이크`);
    }

    printEndMessage() {
        Console.print(`3스트라이크`);
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        return this.choosesNextStep();
    }

    choosesNextStep() {
        Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (number) => {
            if (number === "1") {
                this.isFirst = false;
                return this.play();
            }
            if (number === "2") {
                return Console.close();
            }

            throw new Error("1이나 2를 입력해주세요.");
        });
    }

    checkUserInput(input) {
        if (input.includes(NaN)) {
            throw new Error("숫자만 입력해주세요.");
        }
        if (input.length !== 3) {
            throw new Error("숫자 3개를 입력해주세요.");
        }
        if (new Set(input).size !== 3) {
            throw new Error("중복되지 않는 숫자3개를 입력해주세요.");
        }
        if (input.includes(0)) {
            throw new Error("1~9 사이의 숫자만 입력해주세요.");
        }
    }

    userPlayGame(answer) {
        Console.readLine("숫자를 입력해주세요 : ", (input) => {
            const inputArray = changeToArray(input);
            this.checkUserInput(inputArray);
            if (this.isCorrect(inputArray, answer)) {
                return this.printEndMessage();
            }
            this.inputResult(inputArray, answer);
            return this.userPlayGame(answer);
        });
    }
}

const app = new App();
app.play();

module.exports = App;
