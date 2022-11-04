const MissionUtils = require("@woowacourse/mission-utils");

const REPLY = {
  replay: 1,
  gameEnd: 2,
};

const MESSAGE = {
  gameStart: "숫자 야구 게임을 시작합니다.",
  askReplay: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  gameEnd: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  askNumber: "숫자를 입력해주세요 :",
};

const ERRORMESSAGE = {
  repeat: "중복되지 않는 숫자 3개를 입력해야 합니다.",
  quantity: "숫자 3개를 입력해야 합니다.",
};

const STRIKE = "스트라이크";
const BALL = "볼";
const NOTHING = "낫싱";

class App {
  constructor() {
    this.computerNumber = null;
  }

  generateComputerNumber = () => {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(randomNumber)) {
        computerNumber.push(randomNumber);
      }
    }
    return computerNumber;
  };

  isEveryNumberUnique = (nums) => {
    return nums.length === new Set(nums).size;
  };

  getUserNumber = () => {
    MissionUtils.Console.readLine(MESSAGE.askNumber, (inputNumber) => {
      const userNumber = Array.from(String(inputNumber), Number);

      try {
        this.checkValidity(userNumber);
        return userNumber;
      } catch (e) {
        MissionUtils.Console.print(e);
        MissionUtils.Console.close();
      }
    });
  };

  checkValidity = (userNumber) => {
    if (userNumber.length !== 3) {
      throw ERRORMESSAGE.quantity;
    } else if (!this.isEveryNumberUnique(userNumber)) {
      throw ERRORMESSAGE.repeat;
    }
    return true;
  };

  getStrikeAndBallNumber = (computer, user) => {
    const ballNum = user
      .filter((item, ind) => item !== computer[ind])
      .filter((item) => computer.includes(item)).length;

    const strikeNum = user.filter((item, ind) => item === computer[ind]).length;

    return [ballNum, strikeNum];
  };

  convertNumberToMessage = (matchNum) => {
    const [ballNum, strikeNum] = matchNum;

    let message = `${ballNum === 0 ? "" : ballNum + BALL} ${
      strikeNum === 0 ? "" : strikeNum + STRIKE
    }`;

    if (matchNum.every((item) => item === 0)) {
      message = NOTHING;
    }

    return message.trim();
  };

  showMessage = (message) => {
    MissionUtils.Console.print(message);

    if (message === "3스트라이크") {
      MissionUtils.Console.print(MESSAGE.gameEnd);
      this.askToPlayAgain();
    } else {
      this.compareNumbers();
    }
  };

  askToPlayAgain = () => {
    MissionUtils.Console.readLine(MESSAGE.askReplay, (answer) => {
      if (answer === REPLY.replay) {
        this.play();
      } else if (answer === REPLY.gameEnd) {
        MissionUtils.Console.close();
      }
    });
  };

  compareNumbers = () => {
    const userNumber = this.getUserNumber();
    const strikeAndBallNumber = this.getStrikeAndBallNumber(
      this.computerNumber,
      userNumber
    );
    const result = this.convertNumberToMessage(strikeAndBallNumber);
    this.showMessage(result);
  };

  play() {
    MissionUtils.Console.print(MESSAGE.gameStart);
    this.computerNumber = this.generateComputerNumber();
    this.compareNumbers();
  }
}

module.exports = App;
