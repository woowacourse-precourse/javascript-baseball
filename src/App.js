const MissionUtils = require("@woowacourse/mission-utils");

const GAME_PLAY_NUM = 1;
const GAME_EXIT_NUM = 2;
const COMPUTER_NUMBER_LENGTH = 3;

const STRIKE = "스트라이크";
const BALL = "볼";

const GAME_START_MESSAGE = "숫자 야구 게임을 시작합니다.";
const GAME_END_MESSAGE =
  "3개의 숫자를 모두 맞히셨습니다! 게임 종료 게임을 시작합니다.";

const INPUT_NUMBER_MESSAGE = "숫자를 입력해주세요 :";
const CHECK_REPLAY_OR_EXIT_MESSAGE =
  "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.";

const LENGTH_ERROR_MESSAGE = "3자리의 수를 입력해주세요.";
const RANGE_ERROR_MESSAGE = "1부터 9까지의 수만 입력해주세요.";
const DUPLICATED_ERROR_MESSAGE = "서로 다른 3자리를 입력해주세요.";
const NOT_A_NUMBER_ERROR_MESSAGE = "숫자로만 입력해주세요.";
const GAME_REPLAY_NUMBER_ERROR_MESSAGE = "1 또는 2를 입력하세요.";

class App {
  play() {
    this.printGameMsg(GAME_START_MESSAGE);

    let computerNum;
    let playOptionNum = GAME_PLAY_NUM;

    while (playOptionNum === GAME_PLAY_NUM) {
      computerNum = this.getComputerNum();

      this.start(computerNum);
      this.printGameMsg(GAME_END_MESSAGE);

      playOptionNum = this.inputReplayNum();
    }
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
    return strike === COMPUTER_NUMBER_LENGTH;
  }

  getRandomNum() {
    return MissionUtils.Random.pickNumberInRange(1, 9);
  }

  getComputerNum() {
    let computerNum = [];

    let num;

    while (computerNum.length < 3) {
      num = this.getRandomNum();
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

    MissionUtils.Console.readLine(INPUT_NUMBER_MESSAGE, (input) => {
      if (this.isValidPlayerInput(input)) playerNum = input;
    });

    return playerNum;
  }

  inputReplayNum() {
    let replayNum;

    MissionUtils.Console.readLine(CHECK_REPLAY_OR_EXIT_MESSAGE, (input) => {
      if (this.isValidReplayNum(input)) replayNum = parseInt(input);
    });

    return replayNum;
  }

  isValidPlayerInput(playerNum) {
    if (!this.isValidLength(playerNum)) {
      throw new Error(LENGTH_ERROR_MESSAGE);
    }

    if (!this.isValidRange(playerNum)) {
      throw new Error(RANGE_ERROR_MESSAGE);
    }

    if (!this.isValidDuplicated(playerNum)) {
      throw new Error(DUPLICATED_ERROR_MESSAGE);
    }

    if (isNaN(parseInt(playerNum))) {
      throw new Error(NOT_A_NUMBER_ERROR_MESSAGE);
    }

    return true;
  }

  isValidLength(playerNum) {
    return playerNum.length === COMPUTER_NUMBER_LENGTH;
  }

  isValidRange(playerNum) {
    return !playerNum.includes("0");
  }

  isValidDuplicated(playerNum) {
    const set = new Set(playerNum);

    return set.size === COMPUTER_NUMBER_LENGTH;
  }

  isValidReplayNum(answer) {
    if (Number(answer) !== GAME_PLAY_NUM && Number(answer) !== GAME_EXIT_NUM) {
      throw new Error(GAME_REPLAY_NUMBER_ERROR_MESSAGE);
    }

    return true;
  }

  getHint(computerNum, playerNum) {
    let ball = 0;
    let strike = 0;

    let playerNumArr = Array.from(playerNum);

    playerNumArr.forEach((num, idx) => {
      if (Number(num) === Number(computerNum[idx])) {
        strike++;
        return;
      }

      if (computerNum.includes(Number(num))) ball++;
    });

    return { ball, strike };
  }

  printHint(ball, strike) {
    if (ball === 0 && strike === 0) {
      MissionUtils.Console.print("낫싱");
      return;
    }

    if (ball > 0 && strike === 0) {
      MissionUtils.Console.print(`${ball}${BALL}`);
      return;
    }

    if (ball === 0 && strike > 0) {
      MissionUtils.Console.print(`${strike}${STRIKE}`);
      return;
    }

    if (ball > 0 && strike > 0)
      MissionUtils.Console.print(`${ball}${BALL} ${strike}${STRIKE}`);
  }
}

module.exports = App;
