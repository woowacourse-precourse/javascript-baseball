const GAME_RESULT = require('./Baseball/gameResult');
const GET_COMPUTER_NUM = require('./Baseball/computerNum');
const INPUT_CHECK = require('./Baseball/inputCheck');

const InputView = require('../src/view/InputView');
const OutputView = require('../src/view/OutputView');

class App {
  constructor() {
    this.userInputNum = '';
    this.COMPUTER_NUM;
  }

  play() {
    OutputView.printGameStart();
    this.startGame();
  }

  startGame() {
    this.COMPUTER_NUM = GET_COMPUTER_NUM.getComputerRandomNum();
    this.inputGameNum();
  }

  inputGameNum() {
    InputView.readInputNum(this.getInputNum.bind(this));
  }

  getInputNum(gameNum) {
    this.userInputNum = gameNum;
    INPUT_CHECK.checkInputValidation(this.userInputNum);

    this.gameResult();
    this.inputGameNum();
  }

  gameResult() {
    const getGameHint = GAME_RESULT.gameCounter(
      this.userInputNum.split('').map(Number),
      this.COMPUTER_NUM
    );
    OutputView.printGameHint(getGameHint);
    if (getGameHint.strike === 3) this.inputGameOver();
  }

  inputGameOver() {
    InputView.readRetry(this.getGameOverSelect.bind(this));
  }

  getGameOverSelect(userSelect) {
    INPUT_CHECK.checkUserSelect(userSelect);
    this.runSelectResult(userSelect);
  }

  runSelectResult(userSelect) {
    if (userSelect === '1') this.startGame();
    if (userSelect === '2') OutputView.printGameEnd();
  }
}

const app = new App();
app.play();

module.exports = App;
