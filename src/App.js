const MissionUtils = require("@woowacourse/mission-utils");

class App {
  getThreeRandom() {
    const randoms = [];

    while (randoms.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randoms.includes(randomNumber)) {
        randoms.push(randomNumber);
      }
    }
    return randoms.join('');
  };

  printStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  };

  play() {}
}

module.exports = App;
