const MissionUtils = require("@woowacourse/mission-utils");
const handleException = require("./handleException");
const calculateScore = require("./calculateScore");

class App {
  constructor() {
    this.answer = this.makeRandomNumber();
  }

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
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      const inputs = input.split("").map((i) => Number(i));
      if (!handleException(input)) throw "입력 형식이 잘못되었습니다.";
      calculateScore(this.answer, inputs);
    });
  }
}

module.exports = App;
