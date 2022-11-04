const MissionUtils = require("@woowacourse/mission-utils");
const Utils = require("./Utils");

class App {
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

    return [...enteredNumber].reduce((resultObj, eachEnteredNumber, index) => {
      if (computerNumber[index] === eachEnteredNumber) {
        return { ...resultObj, strike: resultObj.strike + 1 };
      }
      if (computerNumber.includes(eachEnteredNumber)) {
        return { ...resultObj, ball: resultObj.ball + 1 };
      }
      return resultObj;
    }, initialCounter);
  }
}

module.exports = App;
