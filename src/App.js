const { Console, Random } = require("@woowacourse/mission-utils");
const { NOTICE, HINT, OPTION } = require("./message");
const Computer = require("./Computer");

class App {
    constructor() {
        this.computer = new Computer();
        this.user = [];
    }
    play() {
        Console.print(NOTICE.START);
        this.gameStart();
    }

    gameStart() {
        this.computer.setRandomNumber();
        this.getUserInput();
    }

    getUserInput() {
        const computerNumber = this.computer.number;
        Console.print(computerNumber);
        Console.readLine(NOTICE.NUMBER_QUESTION, (userInput) => {
            const userNumberArray = userInput.split("");
            if (this.checkValidInput(userNumberArray)) {
                this.judgePitch(computerNumber, userNumberArray);
            }
        });
    }

    checkValidInput(userInput) {
        if (this.hasZero(userInput) || this.hasSameNumber(userInput) || this.hasRightLength(userInput) || this.hasWrongWord(userInput)) {
            throw new Error(NOTICE.ERROR);
        }
        return true;
    }
    hasZero(userInput) {
        return userInput.includes("0");
    }
    hasSameNumber(userInput) {
        const setInput = new Set(userInput);
        return setInput.size !== userInput.length;
    }
    hasRightLength(userInput) {
        return userInput.length !== OPTION.PITCH_COUNT;
    }
    hasWrongWord(userInput) {
        return !(userInput.join("") > OPTION.MINIMUM_INPUT_RANGE);
    }

    judgePitch(computerNumber, userNumberArray) {
        const userGuess = userNumberArray;
        const strikeCount = this.countStrike(computerNumber, userGuess);
        const ballCount = this.countBall(computerNumber, userGuess);
        this.printResult(strikeCount, ballCount);
    }
    countStrike(computerNumber, userGuess) {
        const strike = computerNumber.filter((el, idx) => el.toString() === userGuess[idx]).length;
        return strike;
    }
    countBall(computerNumber, userGuess) {
        const ball = computerNumber.filter((el) => userGuess.includes(el.toString()));
        return ball.length;
    }

    printResult(strikeCount, ballCount) {
        if (this.out(strikeCount, ballCount)) {
            Console.print(HINT.OUT);
            return this.getUserInput();
        }
        if (this.strikeOut(strikeCount)) {
            Console.print(strikeCount + HINT.STRIKE);
            Console.print(NOTICE.CLEAR);
            return this.questionFinish();
        }
        if (strikeCount === 0) {
            Console.print(ballCount + HINT.BALL);
            return this.getUserInput();
        }
        if (strikeCount - ballCount === 0) {
            Console.print(strikeCount + HINT.STRIKE);
            return this.getUserInput();
        }
        if (ballCount !== 0 && strikeCount !== 0) {
            Console.print(`${ballCount - strikeCount + HINT.BALL} ${strikeCount + HINT.STRIKE}`);
            return this.getUserInput();
        }
    }
    out(strikeCount, ballCount) {
        return ballCount === 0 && strikeCount === 0;
    }
    strikeOut(strikeCount) {
        return strikeCount === OPTION.PITCH_COUNT;
    }

    questionFinish() {
        Console.readLine(NOTICE.FINISH_QUESTION, (finishInput) => {
            if (this.restartGame(finishInput)) {
                return this.gameStart();
            }
            if (this.endGame(finishInput)) {
                return Console.close();
            }
            throw new Error(NOTICE.ERROR);
        });
    }
    restartGame(finishInput) {
        return finishInput === "1";
    }
    endGame(finishInput) {
        return finishInput === "2";
    }
}

const app = new App();
app.play();

module.exports = App;
