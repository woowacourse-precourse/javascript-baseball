import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.play();
  }

  computerNum() {
    const computerTheeDifferNum = MissionUtils.pickUniqueNumbersInRange(1, 9, 3);
  }

  play() {}
}

new App();

export default App;