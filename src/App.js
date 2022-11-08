const MissionUtils = require("@woowacourse/mission-utils");
const validatePlayerInput = require("./Validator");
const {
  GAME_OPTION,
  SCORE,
  GAME_MESSAGE,
  COMPUTER_NUMBER,
} = require("./Constatns");

class App {
  play() {
    this.printGameMsg(GAME_MESSAGE.START);

    let computerNum;
    let playOptionNum = GAME_OPTION.PLAY;

    while (playOptionNum === GAME_OPTION.PLAY) {
      computerNum = this.getComputerNum();

      this.start(computerNum);
      this.printGameMsg(GAME_MESSAGE.END);

      playOptionNum = this.inputReplayNum();
    }

    MissionUtils.Console.close();
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
      const num = MissionUtils.Random.pickNumberInRange(
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
    MissionUtils.Console.print(message);
  }

  inputPlayerNum() {
    let playerNum;

    MissionUtils.Console.readLine(GAME_MESSAGE.INPUT_PLAYER_NUMBER, (input) => {
      if (validatePlayerInput.isValidPlayerInput(input)) playerNum = input;
    });

    return playerNum;
  }

  inputReplayNum() {
    let replayNum;

    MissionUtils.Console.readLine(GAME_MESSAGE.REPLAY_OR_EXIT, (input) => {
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
      MissionUtils.Console.print(SCORE.NOTHING);
      return;
    }

    if (ball > 0 && strike === 0) {
      MissionUtils.Console.print(`${ball}${SCORE.BALL}`);
      return;
    }

    if (ball === 0 && strike > 0) {
      MissionUtils.Console.print(`${strike}${SCORE.STRIKE}`);
      return;
    }

    if (ball > 0 && strike > 0)
      MissionUtils.Console.print(
        `${ball}${SCORE.BALL} ${strike}${SCORE.STRIKE}`
      );
  }
}

module.exports = App;
