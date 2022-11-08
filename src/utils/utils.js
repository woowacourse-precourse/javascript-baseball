const Console = require("../utils/Console");
const Random = require("../utils/Random");

class Utils {
  constructor() {}

  static checkNumberisOk(userInputNumber) {
    const userInputNumberLength = userInputNumber.toString().length;
    if (Utils.#isNotNumber(userInputNumber) && userInputNumberLength !== 3) {
      throw new Error("입력의 길이와 숫자인지 확인하세요!");
    }

    if (Utils.#isNotNumber(userInputNumber)) {
      throw new Error("숫자를 입력하세요!");
    }
    if (userInputNumberLength < 3 || userInputNumberLength > 3) {
      throw new Error("숫자를 3자리 입력하세요!");
    }

    if (Utils.#hasDuplicatedNumber(userInputNumber)) {
      throw new Error("중복된 숫자를 입력하였습니다!");
    }

    if (Utils.#hasNumber0(userInputNumber)) {
      throw new Error("0을 입력하였습니다!");
    }
    return true;
  }

  static #isNotNumber(number) {
    return typeof number !== "number";
  }
  static #hasDuplicatedNumber(number) {
    let numberLength = number.toString().length;
    return numberLength !== [...new Set([...number.toString()])].length;
  }

  static #hasNumber0(number) {
    return number.toString().includes("0");
  }

  static setComputerNumber() {
    let randomNumberSet = new Set();
    while (randomNumberSet.size !== 3) {
      let number = Random.pickNumberInRange(1, 9);
      randomNumberSet.add(number);
    }
    return Array.from(randomNumberSet);
  }

  static compareNumbers(computerRandomNumbers, userInputNumber) {
    let arrUserInputNumber = Array.from(String(userInputNumber), Number);
    this.strikeBallCount = arrUserInputNumber.reduce((strikeBall, number) => {
      if (Utils.#isStrike(computerRandomNumbers, arrUserInputNumber, number)) {
        strikeBall["strike"] = (strikeBall["strike"] ?? 0) + 1;
        return strikeBall;
      } else if (
        Utils.#isBall(computerRandomNumbers, arrUserInputNumber, number)
      ) {
        strikeBall["ball"] = (strikeBall["ball"] ?? 0) + 1;
        return strikeBall;
      } else {
        return strikeBall;
      }
    }, {});
    return this.strikeBallCount;
  }

  static #isStrike(computerRandomNumbers, arrUserInputNumber, number) {
    return (
      computerRandomNumbers.indexOf(number) ===
      arrUserInputNumber.indexOf(number)
    );
  }

  static #isBall(computerRandomNumbers, arrUserInputNumber, number) {
    return (
      computerRandomNumbers.indexOf(number) !==
        arrUserInputNumber.indexOf(number) &&
      computerRandomNumbers.includes(number)
    );
  }

  static returnStringResult(strikeBallCount) {
    let result = [];
    if (Utils.#isEmptyObject(strikeBallCount)) return "낫싱";
    else {
      if (strikeBallCount["ball"] !== undefined) {
        result.push(`${strikeBallCount["ball"]}볼`);
      }
      if (strikeBallCount["strike"] !== undefined) {
        result.push(`${strikeBallCount["strike"]}스트라이크`);
      }
      return result.join(" ");
    }
  }

  static #isEmptyObject(param) {
    return Object.keys(param).length === 0 && param.constructor === Object;
  }

  static askGameAgain() {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (userInpuOneorTwo) => {
        if (userInpuOneorTwo === "1") {
          let computerRandomNumber = Utils.setComputerNumber();
          Utils.startGame(computerRandomNumber);
        } else if (userInpuOneorTwo === "2") {
          Console.print("게임 종료");
          Console.close();
        } else {
          throw new Error("1 또는 2이외의 다른 숫자나 문자를 입력하지 마세요!");
        }
      }
    );
  }

  static startGame(computerRandomNumber) {
    Console.readLine("숫자를 입력하세요 : ", (userInput) => {
      let NumberUserInput = Number(userInput);
      if (Utils.checkNumberisOk(NumberUserInput)) {
        let strikeBallObject = Utils.compareNumbers(
          computerRandomNumber,
          NumberUserInput
        );
        let result = Utils.returnStringResult(strikeBallObject);
        Console.print(result);
        if (result !== "3스트라이크") {
          this.startGame(computerRandomNumber);
        } else {
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          Utils.askGameAgain();
        }
      }
    });
  }
}

module.exports = Utils;
