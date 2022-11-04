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

class App {
  static computerNumber;

  constructor() {}

  createComputerNumber = () => {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (this.isEveryNumberUnique(computerNumber)) {
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
      try {
        const userNumber = this.checkValidity(inputNumber);
        return userNumber;
      } catch (e) {
        MissionUtils.Console.print(e);
        MissionUtils.Console.close();
      }
    });
  };

  checkValidity = (userNumber) => {
    const numsArray = Array.from(String(userNumber), Number);
    if (numsArray.length !== 3) {
      throw ERRORMESSAGE.quantity;
    } else if (this.isEveryNumberUnique(numsArray)) {
      throw ERRORMESSAGE.repeat;
    } else {
      return numsArray;
    }
  };

  getStrikeAndBallNumber = (computer, user) => {
    const strikeNum = user.filter((item, ind) => item === computer[ind]).length;

    const ballNum = user
      .filter((item, ind) => item !== computer[ind])
      .filter((item) => computer.includes(item)).length;

    return [strikeNum, ballNum];
  };

  convertNumberToMessage = (matchNum) => {
    const [strikeNum, ballNum] = matchNum;

    let message = `${ballNum === 0 ? "" : `${ballNum}볼`}${
      strikeNum === 0 ? "" : ` ${strikeNum}스트라이크`
    }`;

    if (matchNum.every((item) => item === 0)) {
      message = "낫싱";
    }

    return message;
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
      computerNumber,
      userNumber
    );
    const result = this.convertNumberToMessage(strikeAndBallNumber);
    this.showMessage(result);
  };

  play() {
    computerNumber = this.createComputerNumber();
    MissionUtils.Console.print(MESSAGE.gameStart);
    this.compareNumbers();
  }
}

module.exports = App;
