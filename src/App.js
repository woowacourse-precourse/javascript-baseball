import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.#missionUtils = new MissionUtils();
  }

  #printStartMessage() {
    this.#missionUtils.print("숫자 야구 게임을 시작합니다.");
  }

  play() {
    this.#printStartMessage();
  }
}

module.exports = App;
