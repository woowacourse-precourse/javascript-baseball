const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGE, PLAYING } = require("./Message");

class App {
    constructor() {
        this.computer = [];
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
        Console.readLine(MESSAGE.NUMBERQUESTION, (numberInput) => {});
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
