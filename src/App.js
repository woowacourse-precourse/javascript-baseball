class App {
  getThreeRandom() {
    const MissionUtils = require("@woowacourse/mission-utils");
    const randoms = [];

    while (randoms.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randoms.includes(randomNumber)) {
        randoms.push(randomNumber);
      }
    }
    return randoms.join('');
  }

  play() {}
}

module.exports = App;
