const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGE, PLAYING } = require("./Message");

class App {
    constructor() {
        this.computer = [];
        this.user = [];
        this.strike = 0;
        this.ball = 0;
    }

    play() {
        Console.print(MESSAGE.START);
        this.gameStart();
    }

    gameStart() {
        this.makeRandomNumber();
        this.questionNumber();
        this.gameFinish();
    }

    makeRandomNumber() {
        this.computer = [];
        while (this.computer.length < 3) {
            const number = Random.pickNumberInRange(1, 9);
            if (!this.computer.includes(number)) {
                this.computer.push(number);
            }
        }
    }

    questionNumber() {
        Console.readLine(MESSAGE.NUMBERQUESTION, (userInput) => {
            this.user = userInput.split("");
            this.isValidNumber(userInput);
            this.ballStrikeCount();
        });
    }

    isValidNumber(userInput) {
        if (this.hasZero(userInput) || this.hasSameNumber(userInput) || this.hasRightLength(userInput) || this.hasWrongWord(userInput)) {
            throw new Error(MESSAGE.ERROR);
        }
    }
    hasZero(userInput) {
        return userInput.includes("0");
    }
    hasSameNumber(userInput) {
        const setInput = new Set(userInput);
        return setInput.size !== this.user.length;
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
        this.strike = this.computer.filter((el, idx) => el.toString() === this.user[idx]).length;
    }
    judgeBall() {
        const ball = this.computer.filter((el) => this.user.includes(el.toString()));
        this.ball = ball.length;
    }

    printResult(strikeCount, ballCount) {
        if (ballCount === 0 && strikeCount === 0) {
            Console.print(PLAYING.OUT);
            return this.questionNumber();
        }
        if (strikeCount === 3) {
            Console.print(strikeCount + PLAYING.STRIKE);
            Console.print(MESSAGE.CLEAR);
            return this.questionFinish();
        }
        if (strikeCount === 0) {
            Console.print(ballCount + PLAYING.BALL);
            return this.questionNumber();
        }
        if (strikeCount - ballCount === 0) {
            Console.print(strikeCount + PLAYING.STRIKE);
            return this.questionNumber();
        }
        if (ballCount !== 0 && strikeCount !== 0) {
            Console.print(`${ballCount - strikeCount + PLAYING.BALL} ${strikeCount + PLAYING.STRIKE}`);
            return this.questionNumber();
        }
    }

    gameFinish() {
        this.questionFinish();
    }

    questionFinish() {
        Console.readLine(MESSAGE.FINISHQUESTION, (finishInput) => {
            if (this.restartGame(finishInput)) {
                return this.gameStart();
            }
            if (this.finishGame(finishInput)) {
                return Console.close();
            }
            throw new Error(MESSAGE.ERROR);
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
