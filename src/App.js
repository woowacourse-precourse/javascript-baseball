const MissionUtils = require("@woowacourse/mission-utils");

const COMPUTER_NUMBER_LENGTH = 3;

const INPUT_NUMBER_MESSAGE = "숫자를 입력해주세요 :";

const LENGTH_ERROR_MESSAGE = "3자리의 수를 입력해주세요.";
const RANGE_ERROR_MESSAGE = "1부터 9까지의 수만 입력해주세요.";
const DUPLICATED_ERROR_MESSAGE = "서로 다른 3자리를 입력해주세요.";
const NOT_A_NUMBER_ERROR_MESSAGE = "숫자로만 입력해주세요.";

class App {
  play() {}

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
}

module.exports = App;
