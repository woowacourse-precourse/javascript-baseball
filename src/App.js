const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const baseBallGame = new BaseBallPlay();
    baseBallGame.start();

  }
}

class RandomNumber {
  getNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      };
    };
  };
};

class BaseBallPlay {
  start() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  };

};

module.exports = App;
