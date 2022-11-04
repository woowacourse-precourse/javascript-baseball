const MissionUtils = require("@woowacourse/mission-utils");

const REPLY = {
  REPLAY: "1",
  GAMEEND: "2",
};

const MESSAGE = {
  GAMESTART: "숫자 야구 게임을 시작합니다.",
  ASKREPLAY: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  GAMEEND: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  ASKNUMBER: "숫자를 입력해주세요 :",
};

const ERROR_MESSAGE = {
  REPEAT: "서로 다른 숫자 3개를 입력해야 합니다.",
  QUANTITY: "숫자 3개를 입력해야 합니다.",
  NOTNUMBER: "숫자만 입력해야 합니다.",
};

const BASEBALLTERM = {
  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
};

class App {
  constructor() {
    this.computerNumber = null;
  }

  generateComputerNumber() {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(randomNumber)) {
        computerNumber.push(randomNumber);
      }
    }
    this.computerNumber = computerNumber;
  }

  isEveryNumberUnique(nums) {
    return nums.length === new Set(nums).size;
  }

  getUserNumber() {
    let userNumber;

    MissionUtils.Console.readLine(MESSAGE.ASKNUMBER, (inputNumber) => {
      userNumber = Array.from(inputNumber, Number);
    });

    try {
      this.checkValidity(numberArr);
    } catch (e) {
      MissionUtils.Console.print(e);
      MissionUtils.Console.close();
    }

    return userNumber;
  }

  checkValidity(userNumber) {
    if (userNumber.length !== 3) {
      throw new Error(ERROR_MESSAGE.QUANTITY);
    }

    if (!this.isEveryNumberUnique(userNumber)) {
      throw new Error(ERROR_MESSAGE.REPEAT);
    }

    if (!userNumber.every((num) => Number.isInteger(num))) {
      throw new Error(ERROR_MESSAGE.NOTNUMBER);
    }
  }

  getBallAndStrikeNumber(computer, user) {
    const ballNum = user
      .filter((item, ind) => item !== computer[ind])
      .filter((item) => computer.includes(item)).length;

    const strikeNum = user.filter((item, ind) => item === computer[ind]).length;

    return [ballNum, strikeNum];
  }

  convertNumberToMessage(matchNum) {
    const [ballNum, strikeNum] = matchNum;

    let message = `${ballNum === 0 ? "" : ballNum + BASEBALLTERM.BALL} ${
      strikeNum === 0 ? "" : strikeNum + BASEBALLTERM.STRIKE
    }`;

    if (matchNum.every((item) => item === 0)) {
      message = BASEBALLTERM.NOTHING;
    }

    return message.trim();
  }

  showMessage(message) {
    MissionUtils.Console.print(message);

    if (message === "3스트라이크") {
      MissionUtils.Console.print(MESSAGE.GAMEEND);
      this.askToPlayAgain();
    } else {
      this.compareNumbers();
    }
  }

  askToPlayAgain() {
    MissionUtils.Console.readLine(MESSAGE.ASKREPLAY, (answer) => {
      if (answer === REPLY.REPLAY) {
        this.playNewGame();
      } else if (answer === REPLY.GAMEEND) {
        MissionUtils.Console.close();
      }
    });
  }

  compareNumbers() {
    const userNumber = this.getUserNumber();
    const ballAndStrikeNumber = this.getBallAndStrikeNumber(
      this.computerNumber,
      userNumber
    );
    const result = this.convertNumberToMessage(ballAndStrikeNumber);
    this.showMessage(result);
  }

  playNewGame() {
    this.generateComputerNumber();
    this.compareNumbers();
  }

  play() {
    MissionUtils.Console.print(MESSAGE.GAMESTART);
    this.playNewGame();
  }
}

module.exports = App;
