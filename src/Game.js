const GAME_WIN = "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료";
const MissionUtils = require("@woowacourse/mission-utils");
module.exports = class Game {
  constructor() {
    this.computerNumbers = [...this.getRandomNumbers()].join("");
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.getUserNumberInput();
  }

  getRandomNumbers() {
    const computerNumbers = new Set();
    while (computerNumbers.size < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumbers.has(number)) computerNumbers.add(number);
    }
    return computerNumbers;
  }

  getUserNumberInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
      MissionUtils.Console.print(number);
      MissionUtils.Console.close();
    });
  }

  getStrikeCount(inputNumber) {
    let count = 0;
    for (index in inputNumber) {
      if (inputNumber[index] == this.computerNumbers[index]) count += 1;
    }
    return count;
  }

  getBallCount() {
    let count = 0;
    for (index in inputNumber) {
      if (inputNumber[index] == this.computerNumbers[(index + 1) % 3]) {
        count += 1;
      }
      if (inputNumber[index] == this.computerNumbers[index - 1]) {
        count += 1;
      }
    }
  }
};
