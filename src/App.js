const { Console, Random } = require("@woowacourse/mission-utils");
const { NOTICE, HINT } = require("./notice");

class App {
    constructor() {
        this.computerNumber = [];
        this.guess = [];
        this.strike = 0;
        this.ball = 0;
    }

    play() {
        Console.print(NOTICE.START);
        this.gameStart();
    }

    gameStart() {
        this.makeRandomNumber();
        this.guessNumber();
        this.gameFinish();
    }

    makeRandomNumber() {
        this.computerNumber = [];
        while (this.computerNumber.length < 3) {
            const number = Random.pickNumberInRange(1, 9);
            if (!this.computerNumber.includes(number)) {
                this.computerNumber.push(number);
            }
        }
    }

    guessNumber() {
        Console.readLine(NOTICE.NUMBER_QUESTION, (userInput) => {
            this.guess = userInput.split("");
            this.isValidNumber(userInput);
            this.ballStrikeCount();
        });
    }

    isValidNumber(userInput) {
        if (this.hasZero(userInput) || this.hasSameNumber(userInput) || this.hasRightLength(userInput) || this.hasWrongWord(userInput)) {
            throw new Error(NOTICE.ERROR);
        }
    }
    hasZero(userInput) {
        return userInput.includes("0");
    }
    hasSameNumber(userInput) {
        const setInput = new Set(userInput);
        return setInput.size !== this.guess.length;
    }
    hasRightLength(userInput) {
        return userInput.length !== 3;
    }
    hasWrongWord(userInput) {
        return !(userInput > 122);
    }

    ballStrikeCount() {
        this.judgeStrike();
        this.judgeBall();
        const strikeCount = this.strike;
        const ballCount = this.ball;
        this.printResult(strikeCount, ballCount);
    }
    judgeStrike() {
        this.strike = this.computerNumber.filter((el, idx) => el.toString() === this.guess[idx]).length;
    }
    judgeBall() {
        const ball = this.computerNumber.filter((el) => this.guess.includes(el.toString()));
        this.ball = ball.length;
    }

    printResult(strikeCount, ballCount) {
        if (ballCount === 0 && strikeCount === 0) {
            Console.print(HINT.OUT);
            return this.guessNumber();
        }
        if (strikeCount === 3) {
            Console.print(strikeCount + HINT.STRIKE);
            Console.print(NOTICE.CLEAR);
            return this.questionFinish();
        }
        if (strikeCount === 0) {
            Console.print(ballCount + HINT.BALL);
            return this.guessNumber();
        }
        if (strikeCount - ballCount === 0) {
            Console.print(strikeCount + HINT.STRIKE);
            return this.guessNumber();
        }
        if (ballCount !== 0 && strikeCount !== 0) {
            Console.print(`${ballCount - strikeCount + HINT.BALL} ${strikeCount + HINT.STRIKE}`);
            return this.guessNumber();
        }
    }

    gameFinish() {
        this.questionFinish();
    }

    questionFinish() {
        Console.readLine(NOTICE.FINISH_QUESTION, (finishInput) => {
            if (this.restartGame(finishInput)) {
                return this.gameStart();
            }
            if (this.finishGame(finishInput)) {
                return Console.close();
            }
            throw new Error(NOTICE.ERROR);
        });
    }
    restartGame(finishInput) {
        return finishInput === "1";
    }
    finishGame(finishInput) {
        return finishInput === "2";
    }
}

const app = new App();
app.play();

module.exports = App;
