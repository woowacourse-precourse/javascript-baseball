const MissionUtils = require("@woowacourse/mission-utils");
const Utils = require("./Utils");

class App {
  BALL = "볼";
  STRIKE = "스트라이크";
  NOTHING = "낫싱";

  constructor() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  play() {
    const computerNumber = this.generateRandomNumber();
    this.inputNumber(computerNumber);
  }

  generateRandomNumber() {
    const computerNumbers = [];
    while (computerNumbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumbers.includes(number)) {
        computerNumbers.push(number);
      }
    }
    return computerNumbers.map((number) => String(number)).join("");
  }

  inputNumber(computerNumber) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (enteredNumber) => {
      if (!this.isValidNumber(enteredNumber)) {
        throw new Error();
      }
      const { strike, ball } = this.getResult(computerNumber, enteredNumber);
      const message = this.printMessage({ strike, ball });
      MissionUtils.Console.print(message);
      if (strike === 3) {
        this.gameOver();
        return;
      }
      this.inputNumber(computerNumber);
    });
  }

  isValidNumber(enteredNumber) {
    if (typeof enteredNumber !== "string") {
      return false;
    }
    if (
      Number.isNaN(Number(enteredNumber)) ||
      Utils.removeDuplicatedString(enteredNumber).length !== 3
    ) {
      return false;
    }
    return true;
  }

  getResult(computerNumber, enteredNumber) {
    const initialCounter = {
      strike: 0,
      ball: 0,
    };

    return [...enteredNumber].reduce((counter, eachEnteredNumber, index) => {
      if (computerNumber[index] === eachEnteredNumber) {
        return { ...counter, strike: counter.strike + 1 };
      }
      if (computerNumber.includes(eachEnteredNumber)) {
        return { ...counter, ball: counter.ball + 1 };
      }
      return counter;
    }, initialCounter);
  }

  printMessage({ strike, ball }) {
    const messageMap = [
      {
        type: this.BALL,
        count: ball,
      },
      {
        type: this.STRIKE,
        count: strike,
      },
    ];
    const resultMessages = messageMap.reduce((messages, { type, count }) => {
      if (count > 0) {
        messages.push(`${count}${type}`);
      }
      return messages;
    }, []);

    if (resultMessages.length === 0) {
      return this.NOTHING;
    }
    return resultMessages.join(" ");
  }

  gameOver() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    this.askRestart();
  }

  askRestart() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (answer) => {
        if (answer === "1") {
          this.play();
          return;
        }
        if (answer === "2") {
          MissionUtils.Console.close();
          return;
        }
        throw new Error();
      }
    );
  }
}

module.exports = App;
