import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  #playerInput;

  constructor() {
    this.#missionUtils = new MissionUtils();
    this.#answer = new Set();
  }

  #printStartMessage() {
    this.#missionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  #makeAnswer() {
    const randomNumber = this.#missionUtils.Random.getRandomNumber(1, 9);
    this.#answer.add(randomNumber);
    if (this.#answer.size < 3) {
      this.#makeAnswer();
    } else {
      return;
    }
  }

  #validatePlayerInput() {}

  #getPlayerInput() {
    const playerInput = this.#missionUtils.Console.getInput(
      "숫자를 입력해주세요: ",
      this.#validatePlayerInput
    );
    this.#playerInput = playerInput;
  }

  play() {
    this.#printStartMessage();
    this.#makeAnswer();
    this.#getPlayerInput();
  }
}

module.exports = App;
