const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;
// const MESSAGE = require("./constants");
// const { START, INPUT, THREE_STRIKE, BALL, STRIKE, ASK_CONTINUE } = MESSAGE;

class App {
    constructor() {
        this.quizNumber = "";
    }

    play() {
        this.startGame();
    }

    makeQuizNumber() {
        let quizNumber = [];
        while (quizNumber.length < 3) {
            let randomInt = Random.pickNumberInRange(1, 9);
            !quizNumber.includes(randomInt) && quizNumber.push(randomInt);
        }
        return quizNumber.join("");
    }

    isNumber(input) {
        return !isNaN(Number(input));
    }

    isValidNum(input) {
        return input.length === 3 && input[0] !== "0";
    }

    isNotDuplicated(input) {
        return new Set(input).size !== 3;
    }

    printMessage(message) {
        Console.print(message);
    }

    startGame() {
        this.printMessage("숫자 야구 게임을 시작합니다");
        this.quizNumber = this.makeQuizNumber();
        this.inputNumber();
    }

    inputNumber() {
        Console.readLine("숫자를 입력해주세요 : ", (answer) => {
            if (!this.isNumber(answer)) {
                throw new Error("숫자를 입력해주세요.");
            } else if (!this.isNotDuplicated(answer)) {
                throw new Error("중복되지 않은 수를 입력해주세요.");
            } else if (!this.isValidNum(answer)) {
                throw new Error(
                    "3자리수 이며, 시작하는 수는 0이 될 수 없습니다."
                );
            }
            this.checkScore(this.quizNumber, answer);
        });
    }

    checkStrike(quizNumber, input) {
        let strike = 0;
        for (let i = 0; i < 3; i++) {
            if (quizNumber[i] === input[i]) {
                strike += 1;
            } else continue;
        }
        return strike;
    }

    checkBall(quizNumber, input) {
        let ball = 0;
        for (let i = 0; i < 3; i++) {
            if (
                quizNumber[i] !== input[i] &&
                quizNumber.indexOf(input[i]) !== -1
            )
                ball += 1;
        }
        return ball;
    }

    checkScore(quizNumber, input) {
        let ball = this.checkBall(quizNumber, input);
        let strike = this.checkStrike(quizNumber, input);
        let score = { strike: strike, ball: ball };
        return this.printStrikeBall(score);
    }

    printStrikeBall(score) {
        if (score.strike === 3) {
            this.printMessage("3개의 숫자를 모두 맞히셨습니다! 게임 종료!");
            this.askContinue();
        } else if (score.strike > 0 && score.ball > 0) {
            Console.print(`${score.ball}볼 ${score.strike}스트라이크`);
            this.inputNumber();
        } else if (score.strike === 0 && score.ball === 0) {
            Console.print(`낫싱`);
            this.inputNumber();
        } else if (score.strike > 0) {
            Console.print(`${score.strike}스트라이크`);
            this.inputNumber();
        } else if (score.ball > 0) {
            Console.print(`${score.ball}볼`);
            this.inputNumber();
        }
    }

    closeGame() {
        Console.close();
    }

    askContinue() {
        Console.readLine(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n",
            (answer) => {
                if (answer == 1) {
                    this.startGame();
                } else if (answer == 2) {
                    this.closeGame();
                }
            }
        );
    }
}

module.exports = App;
