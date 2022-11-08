const { Random, Console } = require("@woowacourse/mission-utils");
const validatePlayerInput = require("./Validator");
const {
  GAME_OPTION,
  SCORE,
  GAME_MESSAGE,
  COMPUTER_NUMBER,
} = require("./Constatns");

class App {
  constructor() {
    this.answer = [];
  }

  play() {
    this.printGameMsg(GAME_MESSAGE.START);

    let playOptionNum = GAME_OPTION.PLAY;

    while (playOptionNum === GAME_OPTION.PLAY) {
      this.answer = this.getComputerNum();

      this.start(this.answer);
      this.printGameMsg(GAME_MESSAGE.END);

      playOptionNum = this.inputReplayNum();
    }

    Console.close();
  }

  start(computerNum) {
    while (true) {
      let playerNum = this.inputPlayerNum();

      const { ball, strike } = this.getHint(computerNum, playerNum);
      this.printHint(ball, strike);

      if (this.isAllStrike(strike)) return;
    }
  }

  isAllStrike(strike) {
    return strike === COMPUTER_NUMBER.LENGTH;
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

  inputPlayerNum() {
    let playerNum;

    Console.readLine(GAME_MESSAGE.INPUT_PLAYER_NUMBER, (input) => {
      if (validatePlayerInput.isValidPlayerInput(input)) playerNum = input;
    });

    return playerNum;
  }

  inputReplayNum() {
    let replayNum;

    Console.readLine(GAME_MESSAGE.REPLAY_OR_EXIT, (input) => {
      if (validatePlayerInput.isValidReplayNum(input))
        replayNum = parseInt(input);
    });

    return replayNum;
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
    return Array.from(string);
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

module.exports = App;
