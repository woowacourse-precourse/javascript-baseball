const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, PLAYING } = require("./Message");

class App {
    play() {
        Console.print("play()-------------------");
        Console.print(MESSAGE.START);
        this.gameStart();
    }

    gameStart() {
        Console.print("gameStart()-------------------");
        this.gameFinish();
    }

    gameFinish() {
        Console.print("gameFinish()-------------------");
        Console.print(MESSAGE.FINISH);
        this.questionFinish();
    }

    questionFinish() {
        Console.print("questionFinish()-------------------");
        Console.readLine(MESSAGE.FINISH, (userInput) => {
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
        return userInput === "1";
    }
    finishGame(userInput) {
        return userInput === "2";
    }
}

const app = new App();
app.play();

module.exports = App;
