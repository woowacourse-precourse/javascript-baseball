const MissionUtils = require("@woowacourse/mission-utils");

class Console {
  constructor() {}

  setComputerNumber() {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }
    return computerNumber;
  }

  getUserValue() {
    return new Promise((sendUsedNumber, reject) => {
      this.inputByConsole("숫자를 입력해주세요 : ", (answer) => {
        if (answer.length > 3) {
          throw new Error("입력한 값이 3자리 이상입니다.");
        }
        if (this.isOverLapping(answer)) {
          throw new Error("입력한 값이 중복됩니다.");
        }
        if (this.isNotNumber(answer)) {
          throw new Error("입력한 값이 숫자가 아닙니다.");
        }

        sendUsedNumber(answer);
      });
    });
  }

  inputRestartOrNot() {
    return new Promise((sendResult, reject) => {
      this.inputByConsole("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (answer) => {
        if (answer === "1" || answer === "2") {
          sendResult(answer);
        } else {
          throw new Error("1과 2가 아닌 값을 입력하였습니다.");
        }
      });
    });
  }

  closeConsole() {
    return MissionUtils.Console.close();
  }

  printMessage(message) {
    return MissionUtils.Console.print(message);
  }

  inputByConsole(uiText, callback) {
    return MissionUtils.Console.readLine(uiText, callback);
  }

  isNotNumber(answer) {
    return isNaN(Number(answer));
  }

  isOverLapping(answer) {
    let overlap = false;
    answer.split("").reduce((previouseValue, currentValue) => {
      if (previouseValue === currentValue) {
        overlap = true;
      }
    });
    return overlap;
  }
}

module.exports = Console;
