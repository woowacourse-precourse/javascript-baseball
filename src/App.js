const { Console, Random } = require("@woowacourse/mission-utils");
const getUserInputs = require("./lib/getUserInput");
class App {
  constructor() {}

  selectGameNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = [];
    while (result.length !== 3) {
      const num = Random.pickNumberInList(numbers);
      if (!result.includes(num)) result.push(num);
    }
    return result;
  }

  isValidGameInput(input) {
    if (typeof input !== "string") return false;
    if (input.length !== 3) return false;
    for (let i = 0; i < 3; i++) {
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

  parseGameInput() {}

  getGameResult() {}

  getNumOfSameIndexSameNumber() {}

  getNumOfSameNumber() {}

  printGameResult() {}

  isValidGameOverInput() {}

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    let gameNumbers = selectGameNumbers();
    while (true) {
      const userInput = await getUserInputs("숫자를 입력해주세요 : ");
      if (!isValidGameInput(userInput)) {
        throw new Error("잘못된 입력값입니다.");
      }
      const parsedInput = parseGameInput(userInput);
      const gameResult = getGameResult(gameNumbers, parsedInput);
      printGameResult(gameResult);
      if (gameResult.strike !== 3) continue;

      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      const userGameOverSelection = await getUserInputs(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );
      if (!isValidGameInput(userGameOverSelection)) {
        throw new Error("잘못된 입력값입니다.");
      }
      if (userGameOverSelection === "1") {
        gameNumbers = selectGameNumbers();
        continue;
      }
      if (userGameOverSelection === "2") {
        break;
      }
    }
  }
}

module.exports = App;
