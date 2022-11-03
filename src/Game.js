const GAME_WIN = "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료";
const MissionUtils = require("@woowacourse/mission-utils");
module.exports = class Game {
  constructor() {
    this.computerNumbers;
    this.gameInit();
  }
  gameInit() {
    this.computerNumbers = [...this.getRandomNumbers()].join("");
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.print(this.computerNumbers);
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
      MissionUtils.Console.print(this.getGameResultString(number));
      if (this.getGameResultString(number) == GAME_WIN)
        return MissionUtils.Console.close();
      else this.getUserNumberInput();
    });
  }

  getGameResultString(inputNumber) {
    const STRIKE_NUMBER = this.getStrikeCount(inputNumber);
    const BALL_NUMBER = this.getBallCount(inputNumber);
    if (STRIKE_NUMBER === 3) return GAME_WIN;
    if (STRIKE_NUMBER == 0 && BALL_NUMBER == 0) {
      return `낫싱`;
    }
    if (STRIKE_NUMBER > 0 && BALL_NUMBER == 0) {
      return `${STRIKE_NUMBER}스트라이크`;
    }
    if (STRIKE_NUMBER == 0 && BALL_NUMBER > 0) return `${BALL_NUMBER}볼`;
    return `${BALL_NUMBER}볼 ${STRIKE_NUMBER}스트라이크`;
  }

  getStrikeCount(inputNumber) {
    let count = 0;
    for (let index in inputNumber) {
      if (inputNumber[index] == this.computerNumbers[index]) count += 1;
    }
    return count;
  }

  getBallCount(inputNumber) {
    let count = 0;
    for (let index in inputNumber) {
      if (
        this.computerNumbers.includes(inputNumber[index]) &&
        this.computerNumbers[index] != inputNumber[index]
      ) {
        count += 1;
      }
    }
    return count;
  }
};
