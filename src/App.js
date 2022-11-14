const { Random, Console } = require("@woowacourse/mission-utils");
const validatePlayerInput = require("./Validator");
const { GAME, SCORE, GAME_MESSAGE, COMPUTER_NUMBER } = require("./Constants");

class App {
  constructor() {
    this.answer = [];
  }

  play() {
    this.printGameMsg(GAME_MESSAGE.START);
    this.answer = this.getComputerNum();
    this.start();
  }

  start() {
    let playerNum = this.inputPlayerNum();
  }

  inputPlayerNum() {
    Console.readLine(GAME_MESSAGE.INPUT_PLAYER_NUMBER, (input) => {
      validatePlayerInput.isValidPlayerInput(input);

      const result = this.getResult(input);
      if (this.isSucesse(result)) {
        this.printGameMsg(GAME_MESSAGE.END);
        this.inputReplayNum();
      } else this.start();
    });
  }

  isSucesse(strike) {
    return strike === COMPUTER_NUMBER.LENGTH;
  }

  getResult(playerNum) {
    const { ball, strike } = this.getHint(this.answer, playerNum);
    this.printHint(ball, strike);

    return strike;
  }

  getComputerNum() {
    const computerNum = [];

    while (computerNum.length < COMPUTER_NUMBER.LENGTH) {
      const num = Random.pickNumberInRange(
        COMPUTER_NUMBER.MIN_RANGE,
        COMPUTER_NUMBER.MAX_RANDE
      );
      if (!computerNum.includes(num)) {
        computerNum.push(num);
      }
    }

    return computerNum;
  }

  printGameMsg(message) {
    Console.print(message);
  }

  inputReplayNum() {
    Console.readLine(GAME_MESSAGE.REPLAY_OR_STOP, (input) => {
      validatePlayerInput.isValidReplayNum(input);

      if (parseInt(input) === GAME.RUN) this.play();
      else Console.close();
    });
  }

  getHint(computerNum, playerNum) {
    let ball = 0;
    let strike = 0;

    let playerNumArr = this.convertStringToArray(playerNum);

    playerNumArr.forEach((num, idx) => {
      if (Number(num) === Number(computerNum[idx])) {
        strike++;
        return;
      }

      if (computerNum.includes(Number(num))) ball++;
    });

    return { ball, strike };
  }

  convertStringToArray(string) {
    return Array.from(String(string));
  }

  printHint(ball, strike) {
    if (ball === 0 && strike === 0) {
      Console.print(SCORE.NOTHING);
      return;
    }

    if (ball > 0 && strike === 0) {
      Console.print(`${ball}${SCORE.BALL}`);
      return;
    }

    if (ball === 0 && strike > 0) {
      Console.print(`${strike}${SCORE.STRIKE}`);
      return;
    }

    if (ball > 0 && strike > 0)
      Console.print(`${ball}${SCORE.BALL} ${strike}${SCORE.STRIKE}`);
  }
}

const app = new App();
app.play();

module.exports = App;
