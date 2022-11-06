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

    gameFinish() {
        Console.print("gameFinish()-------------------");
        this.questionFinish();
    }

    questionFinish() {
        Console.print("questionFinish()-------------------");
        Console.readLine(MESSAGE.FINISHQUESTION, (userInput) => {
            if (this.restartGame(userInput)) {
                return this.gameStart();
            }
            if (this.finishGame(userInput)) {
                return Console.close();
            }
            throw new Error(MESSAGE.ERROR);
        });
    }

    restartGame(userInput) {
        Console.print("restartGame()-------------------");
        return userInput === "1";
    }
    finishGame(userInput) {
        Console.print("finishGame()-------------------");
        return userInput === "2";
    }
}

const app = new App();
app.play();

module.exports = App;
