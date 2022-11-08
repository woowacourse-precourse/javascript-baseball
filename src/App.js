const MissionUtils = require('@woowacourse/mission-utils');

const makeNumber = () => {
  const result = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  return result;
};

const userInput = () => {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {})
};

class App {
  play() {
    let answer = makeNumber();

  };
};

const app = new App()
app.play()

module.exports = App;
