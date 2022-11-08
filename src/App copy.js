const { Console } = require("@woowacourse/mission-utils");
const { NOTICE, HINT, OPTION } = require("./message");
const Computer = require("./Computer");
const User = require("./User");
const Hint = require("./Hint");

class App {
    constructor() {
        this.computer = new Computer();
        this.user = new User();
        this.hint = new Hint();
    }

    play() {
        Console.print(NOTICE.START);
        this.gameStart();
    }

    gameStart() {
        this.computer.setRandomNumber();
        this.pitching();
    }

    pitching() {
        Console.readLine(NOTICE.NUMBER_QUESTION, (userInput) => {
            this.user.setNumberArray(userInput);
            this.hint.judgePitching(this.computer.number, this.user.number);
            this.printResult(this.hint.count.strike, this.hint.count.ball);
        });
    }

    printResult(strikeCount, ballCount) {
        if (this.out(strikeCount, ballCount)) {
            Console.print(HINT.OUT);
            return this.pitching();
        }
        if (this.strikeOut(strikeCount)) {
            Console.print(strikeCount + HINT.STRIKE);
            Console.print(NOTICE.CLEAR);
            return this.questionFinish();
        }
        if (strikeCount === 0) {
            Console.print(ballCount + HINT.BALL);
            return this.pitching();
        }
        if (strikeCount - ballCount === 0) {
            Console.print(strikeCount + HINT.STRIKE);
            return this.pitching();
        }
        if (ballCount !== 0 && strikeCount !== 0) {
            Console.print(`${ballCount - strikeCount + HINT.BALL} ${strikeCount + HINT.STRIKE}`);
            return this.pitching();
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
