const InputView = require("../views/InputView");
const MissionUtils = require("@woowacourse/mission-utils");
const OutputView = require("../views/OutputView");
const Validate = require("../utils/Validate");

const { VALUE } = require("../constant/Value");

const RandomNumberMaker = require("../utils/RandomNumberMaker");

class GameController {
  #computerNumber;
  #userInputNumber;
  #ball = 0;
  #strike = 0;

  startGame() {
    OutputView.printGameStartMessage();

    this.makeComputerNumber();
  }

  makeComputerNumber() {
    this.#computerNumber = RandomNumberMaker();

    this.inputNumber();
  }

  inputNumber() {
    InputView.readNumber((number) =>
      this.validCheck(number.split("").map(Number))
    );
  }

  validCheck(number) {
    Validate.checkUserInput(number);
    this.#userInputNumber = number;

    this.countBallStrike();
  }

  countBallStrike() {
    this.#userInputNumber.forEach((item, index) => {
      if (item === this.#computerNumber[index]) {
        return (this.#strike += 1);
      }
      if (this.#computerNumber.includes(Number(item))) {
        return (this.#ball += 1);
      }
    });

    this.printGameResult();
  }

  printGameResult() {
    OutputView.printResult(this.#ball, this.#strike);

    if (this.#strike === 3) {
      return this.inputCommand();
    }
    return this.continueGame();
  }

  inputCommand() {
    InputView.readCommand((command) => {
      Validate.checkCommand(command);
      if (command == VALUE.command.restart) {
        return this.restartGame();
      }
      return MissionUtils.Console.close();
    });
  }

  restartGame() {
    this.resetBallStrike();

    this.makeComputerNumber();
  }

  continueGame() {
    this.resetBallStrike();

    this.inputNumber();
  }

  resetBallStrike() {
    this.#ball = 0;
    this.#strike = 0;
  }
}
module.exports = GameController;
