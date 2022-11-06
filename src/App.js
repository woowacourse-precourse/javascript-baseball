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
        Console.print("play()-------------------");
        Console.print(MESSAGE.START);
        this.gameStart();
    }

    gameStart() {
        Console.print("gameStart()-------------------");
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
        Console.print("makeRandomNumber()-----------------");
        Console.print(this.computer);
    }

    questionNumber() {
        Console.print("questionNumber()-----------------");
        Console.readLine(MESSAGE.NUMBERQUESTION, (userInput) => {
            this.user = userInput.split("");
            Console.print(this.user);
            this.isValidNumber(userInput);
            this.ballStrikeCount();
        });
    }

    isValidNumber(userInput) {
        Console.print("isValidNumber()-------------------");
        if (this.hasZero(userInput) || this.hasSameNumber(userInput) || this.hasRightLength(userInput)) {
            throw new Error(MESSAGE.ERROR);
        }
    }
    hasZero(userInput) {
        Console.print("hasZero()-----------------");
        return userInput.includes("0");
    }
    hasSameNumber(userInput) {
        Console.print("hasSameNumber()-----------------");
        const setInput = new Set(userInput);
        return setInput.size !== this.user.length;
    }
    hasRightLength(userInput) {
        return userInput.length !== 3;
    }

    ballStrikeCount() {
        Console.print("ballStrikeCount()-----------------");
        this.judgeStrike();
        this.judgeBall();
        const strikeCount = this.strike;
        const ballCount = this.ball;
        this.printResult(strikeCount, ballCount);
    }
    judgeStrike() {
        Console.print("judgeStrike()-----------------");
        this.strike = this.computer.filter((el, idx) => el.toString() === this.user[idx]).length;
    }
    judgeBall() {
        Console.print("judgeBall()-----------------");
        const ball = this.computer.filter((el) => this.user.includes(el.toString()));
        this.ball = ball.length;
    }

    printResult(strikeCount, ballCount) {
        if (ballCount === 0 && strikeCount === 0) {
            Console.print(PLAYING.OUT);
            return this.questionNumber();
        }
        if (strikeCount === 3) {
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
            Console.print(`${ballCount + PLAYING.BALL} ${strikeCount + PLAYING.STRIKE}`);
            return this.questionNumber();
        }
    }

    gameFinish() {
        Console.print("gameFinish()-------------------");
        this.questionFinish();
    }

    questionFinish() {
        Console.print("questionFinish()-------------------");
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
        Console.print("restartGame()-------------------");
        return finishInput === "1";
    }
    finishGame(finishInput) {
        Console.print("finishGame()-------------------");
        return finishInput === "2";
    }
}

const app = new App();
app.play();

module.exports = App;
