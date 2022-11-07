const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

class App {
    constructor() {
        this.quizNumber = "";
    }

    play() {
        this.quizNumber = this.makeQuizNumber();
        this.makeQuizNumber();
        this.startGame();
    }

    makeQuizNumber() {
        let quizNumber = "";
        for (let i = 0; i < 3; i++) {
            let randomIntToString = Random.pickNumberInRange(1, 3).toString();
            quizNumber.includes(randomIntToString)
                ? i - 1
                : (quizNumber += randomIntToString);
        }
        return quizNumber;
    }

    isValidInput(input) {
        return input.length === 3 && !isNaN(Number(input)) && input[0] !== "0";
    }

    printMessage(message) {
        Console.print(message);
    }

    startGame() {
        this.printMessage("숫자 야구 게임을 시작합니다");
        this.inputNumber();
    }

    inputNumber() {
        Console.readLine("숫자를 입력해주세요.", (answer) => {
            this.checkStrikeBalls(this.quizNumber, answer);
            if (!this.isValidInput(answer)) {
                throw new Error("잘못된 수를 입력하였습니다.");
            }
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

    checkStrikeBalls(quizNumber, input) {
        let ball = this.checkBall(quizNumber, input);
        let strike = this.checkStrike(quizNumber, input);
        let score = { strike: strike, ball: ball };
        return this.printStrikeBall(score);
    }

    printStrikeBall(score) {
        if (score.strike > 0 && score.ball > 0) {
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
        } else if (score.strike === 3) {
            this.printMessage("성공!");
        }
    }
}

module.exports = App;
