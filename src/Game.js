const MissionUtils = require('@woowacourse/mission-utils');
const gameControlValidation = require('./validation/gameControlValidation.js');
const gameInputValidation = require('./validation/gameInputValidation.js');

const MESSAGE = {
  WIN: '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  START: '숫자 야구 게임을 시작합니다.',
  INPUT: '숫자를 입력해 주세요 : ',
  RESTART_INPUT: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ',
};
const RESTART = 1;
const END = 2;

module.exports = class Game {
  constructor() {
    this.computerNumbers;
    MissionUtils.Console.print(MESSAGE.START);
    this.gameInit();
  }

  gameInit() {
    this.computerNumbers = [...this.getRandomNumbers()].join('');
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
    MissionUtils.Console.readLine(MESSAGE.INPUT, (input) =>
      this.progressGame(input)
    );
  }

  progressGame(userNumberInput) {
    gameInputValidation(userNumberInput);
    const gameResultString = this.getGameResultString(userNumberInput);
    MissionUtils.Console.print(gameResultString);
    if (gameResultString == MESSAGE.WIN) this.getUserControlInput();
    this.getUserNumberInput();
  }

  getGameResultString(inputNumber) {
    const strikeCount = this.getStrikeCount(inputNumber);
    const ballCount = this.getBallCount(inputNumber);

    const IS_ANSWER = strikeCount === 3;
    const IS_NOTHING = strikeCount == 0 && ballCount === 0;
    const IS_ONLY_STRIKE = strikeCount > 0 && ballCount == 0;
    const IS_ONLY_BALL = strikeCount === 0 && ballCount > 0;

    if (IS_ANSWER) return MESSAGE.WIN;
    if (IS_NOTHING) return `낫싱`;
    if (IS_ONLY_STRIKE) return `${strikeCount}스트라이크`;
    if (IS_ONLY_BALL) return `${ballCount}볼`;
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

  getUserControlInput() {
    MissionUtils.Console.readLine(MESSAGE.RESTART_INPUT, (input) =>
      this.handleGame(input)
    );
  }

  handleGame(userControlInput) {
    gameControlValidation(userControlInput);
    if (userControlInput == RESTART) this.gameInit();
    if (userControlInput == END) this.endGame();
  }

  endGame() {
    MissionUtils.Console.close();
  }
};
