const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const user = new User();
    selectPlayOption(user);
  }
}

class User {
  constructor() {
    this.playOption;
    this.number = [];
  }
}

const selectPlayOption = (user) => {
  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    (select) => {
      console.log(`${select}`);
      user.playOption = select;
    }
  );
};

module.exports = App;
