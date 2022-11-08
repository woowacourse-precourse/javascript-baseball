const { Console, Random } = require("@woowacourse/mission-utils");
const {
    START,
    INPUT,
    THREE_STRIKE,
    BALL,
    STRIKE,
    ASK_CONTINUE,
    ISNOTNUMBER,
    ISDUPLICATED,
    ISNOTVALIDNUMBER,
    NOTHING,
} = require("./Message");
const { isNotDuplicated, isValidNum, isNumber } = require("./InputValidation");

class App {
    constructor() {
        this.quizNumber = "";
    }

    printMessage(message) {
        Console.print(message);
    }

    play() {
        this.printMessage(START);
        this.startGame();
    }

    startGame() {
        this.quizNumber = this.makeQuizNumber();
        this.inputNumber();
    }

    makeQuizNumber() {
        let quizNumber = [];
        while (quizNumber.length < 3) {
            let randomInt = Random.pickNumberInRange(1, 9);
            !quizNumber.includes(randomInt) && quizNumber.push(randomInt);
        }
        return quizNumber.join("");
    }

    inputNumber() {
        Console.readLine(INPUT, (answer) => {
            if (!isNumber(answer)) {
                throw new Error(ISNOTNUMBER);
            } else if (!isValidNum(answer)) {
                throw new Error(ISNOTVALIDNUMBER);
            } else if (!isNotDuplicated(answer)) {
                throw new Error(ISDUPLICATED);
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
        const ball = this.checkBall(quizNumber, input);
        const strike = this.checkStrike(quizNumber, input);
        const score = { strike: strike, ball: ball };
        return this.printStrikeBall(score);
    }

    printStrikeBall(score) {
        if (score.strike === 3) {
            this.printMessage(score.strike + STRIKE);
            this.printMessage(THREE_STRIKE);
            this.askContinue();
        } else if (score.strike > 0 && score.ball > 0) {
            Console.print(score.ball + BALL + " " + score.strike + STRIKE);
            this.inputNumber();
        } else if (score.strike === 0 && score.ball === 0) {
            Console.print(NOTHING);
            this.inputNumber();
        } else if (score.strike > 0) {
            Console.print(score.strike + STRIKE);
            this.inputNumber();
        } else if (score.ball > 0) {
            Console.print(score.ball + BALL);
            this.inputNumber();
        }
    }

    closeGame() {
        Console.close();
    }

    askContinue() {
        Console.readLine(ASK_CONTINUE, (answer) => {
            if (answer == 1) {
                this.startGame();
            } else if (answer == 2) {
                this.closeGame();
            }
        });
    }
}

module.exports = App;
