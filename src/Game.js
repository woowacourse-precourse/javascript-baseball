const GAME_WIN = "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료";
const MissionUtils = require("@woowacourse/mission-utils");
const GameControlValidation = require("./GameControlValidation.js");
const GameInputValidation = require("./GameInputValidation.js");
let print = require("./utils/print.js");
let input = require("./utils/input.js");
module.exports = class Game {
  constructor() {
    this.computerNumbers;
    this.gameInit();
  }

  gameInit() {
    this.computerNumbers = [...this.getRandomNumbers()].join("");
    print("숫자 야구 게임을 시작합니다.");
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

  async getUserNumberInput() {
    const userNumberInput = await input("숫자를 입력해 주세요 : ");
    let validationChecker = new GameInputValidation(userNumberInput);
    validationChecker.validation();
    print(this.getGameResultString(userNumberInput));
    if (this.getGameResultString(userNumberInput) == GAME_WIN) {
      this.handleGame();
    } else this.getUserNumberInput();
  }

  getGameResultString(inputNumber) {
    const strikeCount = this.getStrikeCount(inputNumber);
    const ballCount = this.getBallCount(inputNumber);
    if (strikeCount === 3) return GAME_WIN;
    if (strikeCount == 0 && ballCount == 0) {
      return `낫싱`;
    }
    if (strikeCount > 0 && ballCount == 0) {
      return `${strikeCount}스트라이크`;
    }
    if (strikeCount == 0 && ballCount > 0) return `${ballCount}볼`;
    return `${ballCount}볼 ${strikeCount}스트라이크`;
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

  async handleGame() {
    let userControlInput = await input(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    let gameControlValidation = new GameControlValidation(userControlInput);
    gameControlValidation.validation();
    if (userControlInput == 1) this.gameInit();
    else MissionUtils.Console.close();
  }
};
