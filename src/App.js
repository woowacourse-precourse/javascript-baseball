const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, OPTION, ERROR_MESSAGE } = require('./libs/const.js');
const game = require('./libs/game.js');
const validation = require('./libs/validation.js');
const ComputerAnswer = require('./Model/ComputerAnswer.js');
const InputView = require('./View/InputView.js');
const OutputView = require('./View/OutputView.js');

class App {
  #computerAnswer;

  constructor() {
    this.#computerAnswer = new ComputerAnswer();
  }

  play() {
    this.start();
    this.progress();
  }

  start() {
    OutputView.printMessage(MESSAGE.START);
  }

  progress() {
    InputView.readPlayerAnswer((playerAnswer) => {
      if (!validation.checkPlayerAnswer(playerAnswer))
        game.quitWithException(ERROR_MESSAGE.ANSWER);

      const { ballCount, strikeCount } =
        this.#computerAnswer.comparePlayerAnswer(playerAnswer);

      OutputView.printResult(ballCount, strikeCount);

      if (strikeCount !== 3) return this.progress();

      return this.end();
    });
  }

  end() {
    InputView.readCommand((option) => {
      if (!validation.checkPlayerOption(option))
        game.quitWithException(ERROR_MESSAGE.OPTION);

      if (option === OPTION.RESTART) return this.restart();

      return this.exit();
    });
  }

  restart() {
    this.#computerAnswer.resetValue();
    this.progress();
  }

  exit() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
