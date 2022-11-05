const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}

  makeRandomNumber() {
    const results = [];
    while (results.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!results.includes(number)) results.push(number);
    }
    return results;
  }

  enterAnswer() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {});
  }
}

module.exports = App;
