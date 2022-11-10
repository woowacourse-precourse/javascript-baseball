const { Console } = require("@woowacourse/mission-utils");
const utilFun = require("./utils/utils");
const {
  ERROR_MESSAGE,
  ANNOUNCEMENT_MESSAGE,
  GAME_MESSAGE,
} = require("./constant/constant");

class App {
  constructor() {
    this.computerRandomThreeNumber = 0;
    this.userInputThreeNumber = 0;
  }

  #init() {
    this.computerRandomThreeNumber = utilFun.computerUniqueThreeNumbers();
  }

  #baseballGameWin() {
    Console.readLine(ANNOUNCEMENT_MESSAGE.RESTART.MESSAGE, (userAnswer) => {
      switch (userAnswer) {
        case ANNOUNCEMENT_MESSAGE.RESTART.START:
          this.play();
          break;
        case ANNOUNCEMENT_MESSAGE.RESTART.FINISH:
          Console.print(ANNOUNCEMENT_MESSAGE.END);
          Console.close();
          break;
        default:
          throw ERROR_MESSAGE.IS_RESTART;
      }
    });
  }

  #baseballGameStart() {
    const gameResult = utilFun.compareComputerAndUser(
      this.computerRandomThreeNumber,
      this.userInputThreeNumber
    );
    Console.print(gameResult);
    switch (gameResult) {
      case GAME_MESSAGE.NOTHING:
        this.#getUserNumbers();
        break;
      case GAME_MESSAGE.WIN:
        Console.print(ANNOUNCEMENT_MESSAGE.WIN);
        this.#baseballGameWin();
        break;
      default:
        this.#getUserNumbers();
    }
  }

  #getUserNumbers() {
    Console.readLine(ANNOUNCEMENT_MESSAGE.INPUT, (userAnswer) => {
      utilFun.checkUserValid(userAnswer);
      this.userInputThreeNumber = userAnswer;
      if (userAnswer) this.#baseballGameStart();
    });
  }

  play() {
    this.#init();
    Console.print(ANNOUNCEMENT_MESSAGE.START);
    this.#getUserNumbers();
  }
}

const baseballGame = new App();
baseballGame.play();

module.exports = App;
