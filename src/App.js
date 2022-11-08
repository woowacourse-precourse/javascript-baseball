import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  #answer;
  constructor() {
    this.#missionUtils = new MissionUtils();
  }

  #printStartMessage() {
    this.#missionUtils.print("숫자 야구 게임을 시작합니다.");
  }

  #makeAnswer() {
    const firstNumber = this.#missionUtils.getRandomNumber(1, 9);
    const secondNumber = this.#missionUtils.getRandomNumber(1, 9);
    const thirdNumber = this.#missionUtils.getRandomNumber(1, 9);

    this.#answer = `${firstNumber}${secondNumber}${thirdNumber}`;
  }

  play() {
    this.#printStartMessage();
    this.#makeAnswer();
  }
}

module.exports = App;
