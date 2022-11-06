const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.answer = null;
  }
  play() {
    this.getAnswerNumber();
    this.printGameStartMessage();
  }
  getAnswerNumber() {
    const RANGE_START_NUMBER = 1;
    const RANGE_END_NUMBER = 9;
    const NUMBER_OF_DIGITS = 3;

    const ANSWER = MissionUtils.Random.pickUniqueNumbersInRange(
      RANGE_START_NUMBER,
      RANGE_END_NUMBER,
      NUMBER_OF_DIGITS
    );

    this.answer = ANSWER;
  }
  printGameStartMessage() {
    const GAME_START_MESSAGE = "숫자 야구 게임을 시작합니다.";
    Console.print(GAME_START_MESSAGE);
  }
}

module.exports = App;
