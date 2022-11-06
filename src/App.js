const MissionUtils = require("@woowacourse/mission-utils");
const Utils = require("./Utils");

class App {
  BALL = "볼";
  STRIKE = "스트라이크";
  NOTHING = "낫싱";
  MESSAGES = {
    GREET: "숫자 야구 게임을 시작합니다.",
    PLEASE_NUMBER: "숫자를 입력해주세요 : ",
    GAME_SET: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    ASK_RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  };

  play() {
    this.printMessage(this.MESSAGES.GREET);
    this.gameStart();
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
    this.takeInput(this.MESSAGES.PLEASE_NUMBER, (enteredNumber) => {
      if (!this.isValidNumber(enteredNumber)) {
        throw new Error();
      }
      const { strike, ball } = this.countStrikeAndBall(
        computerNumber,
        enteredNumber
      );
      this.printMessage(this.getResultMessage({ strike, ball }));
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

  countStrikeAndBall(computerNumber, enteredNumber) {
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

  createMessageOrder = ({ strike, ball }) => {
    return [
      {
        type: this.BALL,
        count: ball,
      },
      {
        type: this.STRIKE,
        count: strike,
      },
    ];
  };

  getResultMessage({ strike, ball }) {
    if (strike === 0 && ball === 0) {
      return this.NOTHING;
    }
    return this.createMessageOrder({ strike, ball })
      .reduce((messages, { type, count }) => {
        if (count > 0) {
          messages.push(`${count}${type}`);
        }
        return messages;
      }, [])
      .join(" ");
  }

  gameStart() {
    const computerNumber = this.generateRandomNumber();
    this.inputNumber(computerNumber);
  }

  gameOver() {
    this.printMessage(this.MESSAGES.GAME_SET);
    this.askRestart();
  }

  askRestart() {
    this.takeInput(this.MESSAGES.ASK_RESTART, (answer) => {
      if (answer === "1") {
        this.gameStart();
        return;
      }
      if (answer === "2") {
        this.gameExit();
        return;
      }
      throw new Error();
    });
  }

  printMessage(message) {
    MissionUtils.Console.print(message);
  }

  takeInput(message, callbackFn) {
    MissionUtils.Console.readLine(message, callbackFn);
  }

  gameExit() {
    MissionUtils.Console.close();
  }
}

module.exports = App;
