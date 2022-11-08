const { Console, Random } = require("@woowacourse/mission-utils");
const getUserInputs = require("./lib/getUserInput");

class App {
  selectGameNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = [];
    while (result.length !== 3) {
      const num = Random.pickNumberInList(numbers);
      if (!result.includes(num)) result.push(num);
    }
    this.gameNumbers = result;
  }

  static isValidGameInput(input) {
    if (typeof input !== "string") return false;
    if (input.length !== 3) return false;
    for (let i = 0; i < 3; i += 1) {
      if (!(input.charCodeAt(i) > 48 && input.charCodeAt(i) < 58)) return false;
    }
    if (
      input[0] === input[1] ||
      input[1] === input[2] ||
      input[0] === input[2]
    ) {
      return false;
    }
    return true;
  }

  static parseGameInput(validUserInput) {
    const parsed = validUserInput.split("").map((elem) => Number(elem));
    return parsed;
  }

  getGameResult(userNumbers) {
    const numOfSameIdxSameNum = this.getNumOfSameIndexSameNumber(userNumbers);
    const numOfSameNum = this.getNumOfSameNumber(userNumbers);

    return {
      strike: numOfSameIdxSameNum,
      ball: numOfSameNum - numOfSameIdxSameNum,
    };
  }

  getNumOfSameIndexSameNumber(userNumbers) {
    let count = 0;
    for (let i = 0; i < 3; i += 1) {
      if (this.gameNumbers[i] === userNumbers[i]) {
        count += 1;
      }
    }
    return count;
  }

  getNumOfSameNumber(userNumbers) {
    let count = 0;
    for (let i = 0; i < 3; i += 1) {
      if (userNumbers.includes(this.gameNumbers[i])) count += 1;
    }
    return count;
  }

  static printGameResult(gameResult) {
    if (gameResult.ball === 0 && gameResult.strike === 0) {
      Console.print("낫싱");
    }
    if (gameResult.ball === 0 && gameResult.strike !== 0) {
      Console.print(`${gameResult.strike}스트라이크`);
    }
    if (gameResult.ball !== 0 && gameResult.strike === 0) {
      Console.print(`${gameResult.ball}볼`);
    }
    if (gameResult.ball !== 0 && gameResult.strike !== 0) {
      Console.print(`${gameResult.ball}볼 ${gameResult.strike}스트라이크`);
    }
  }

  static isValidGameOverInput(userInput) {
    if (typeof userInput !== "string") return false;
    if (userInput.length !== 1) return false;
    if (userInput !== "1" && userInput !== "2") return false;

    return true;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.selectGameNumbers();
    // eslint-disable-next-line no-constant-condition
    while (true) {
      // eslint-disable-next-line no-await-in-loop
      const userInput = await getUserInputs("숫자를 입력해주세요 : ");
      if (!App.isValidGameInput(userInput)) {
        throw new Error("잘못된 입력값입니다.");
      }
      const parsedInput = App.parseGameInput(userInput);
      const gameResult = this.getGameResult(parsedInput);
      App.printGameResult(gameResult);
      // eslint-disable-next-line no-continue
      if (gameResult.strike !== 3) continue;

      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      // eslint-disable-next-line no-await-in-loop
      const userGameOverSelection = await getUserInputs(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );
      if (!App.isValidGameInput(userGameOverSelection)) {
        throw new Error("잘못된 입력값입니다.");
      }
      if (userGameOverSelection === "1") {
        this.selectGameNumbers();
      }
      if (userGameOverSelection === "2") {
        break;
      }
    }
  }
}

module.exports = App;
