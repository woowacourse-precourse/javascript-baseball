const { Console } = require('@woowacourse/mission-utils');

const { GAME_VALUE, GAME_MESSAGE } = require('./constants');
const {
  isValidRestartInputValue,
  getGameResultMessage,
  getSameNumCount,
  getStrikeCount,
  haveSameNumber,
  isValidRangeNumber,
  getRandomNumbers,
} = require('./modules/index');

class App {
  constructor() {
    this.offerComputerRandomNumbers();
    this.initGameResult();
    this.userNumbers;
  }

  offerComputerRandomNumbers() {
    this.computerNumbers = getRandomNumbers(3, 1, 9);
    console.log(this.computerNumbers);
  }

  initGameResult() {
    this.gameResult = { ball: 0, strike: 0 };
  }

  play() {
    Console.print(GAME_MESSAGE.startNotification);
    this.gameStart();
  }

  gameStart() {
    Console.readLine(GAME_MESSAGE.input, (ans) => this.setUserNumbers(ans));
  }

  setUserNumbers(inputValue) {
    this.userNumbers = inputValue;
    this.isValidInput();
  }

  isValidInput() {
    isValidRangeNumber(this.userNumbers);
    haveSameNumber(this.userNumbers);
    this.setGameResult();
  }

  setGameResult() {
    const strikeCnt = getStrikeCount(this.userNumbers, this.computerNumbers);
    const sameNumCnt = getSameNumCount(this.userNumbers, this.computerNumbers);
    this.gameResult.strike = strikeCnt;
    this.gameResult.ball = sameNumCnt - strikeCnt;
    this.printGameResult();
  }

  printGameResult() {
    const gameResultMessage = getGameResultMessage(this.gameResult);
    Console.print(gameResultMessage);
    this.isUserWin();
  }

  isUserWin() {
    this.gameResult.strike === 3 ? this.gameOver() : this.retry();
  }

  retry() {
    this.initGameResult();
    this.gameStart();
  }

  gameOver() {
    Console.print(GAME_MESSAGE.gameOver);
    Console.readLine('', (ans) => this.isOneOrTwo(ans));
  }

  isOneOrTwo(inputValue) {
    isValidRestartInputValue(inputValue);
    inputValue === GAME_VALUE.restart ? this.gameRestart() : this.gameExit();
  }

  gameRestart() {
    this.offerComputerRandomNumbers();
    this.initGameResult();
    this.gameStart();
  }

  gameExit() {
    Console.print(GAME_MESSAGE.exit);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
