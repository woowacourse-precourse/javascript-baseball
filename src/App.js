const { Console } = require("@woowacourse/mission-utils");
const { NOTICE, HINT, OPTION } = require("./message");
const Computer = require("./component/Computer");
const User = require("./component/User");
const Hint = require("./component/Hint");

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
            const { strikeCount, ballCount } = this.hint.judgePitching(this.computer.number, this.user.number);

            this.printResult(strikeCount, ballCount);
        });
    }

    printResult(strikeCount, ballCount) {
        if (ballCount === 0 && strikeCount === 0) {
            Console.print(HINT.OUT);
            return this.pitching();
        }
        if (strikeCount === OPTION.PITCH_COUNT) {
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
