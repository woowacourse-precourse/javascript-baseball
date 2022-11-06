const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const baseBallGame = new BaseBallPlay();
    baseBallGame.start();
    baseBallGame.repeatContext();
  }
}

class RandomNumber {
  getNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }
}

class BaseBallPlay {
  start() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  userInputHandler(computer) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 :", (input) => {
      MissionUtils.Console.print(`테스트 : ${computer} ,${input}`);
    });
  }

  repeatContext() {
    const computerAnswer = new RandomNumber();
    const computer = computerAnswer.getNumber();
    this.userInputHandler(computer);
  }
}

module.exports = App;
