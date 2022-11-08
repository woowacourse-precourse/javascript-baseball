const MissionUtils = require('@woowacourse/mission-utils');

const makeNumber = () => {
  const result = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  return result;
};

class App {
  play() {
    let answer = makeNumber();
  };
};

const app = new App()
app.play()

module.exports = App;
