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
      if (!handleException(inputs)) throw "입력 형식이 잘못되었습니다.";
      const score = calculateScore(this.answer, inputs);
      const print = this.printScore(score);
      MissionUtils.Console.print(print);
    });
  }

  printScore({ strike, ball }) {
    if (strike !== 0 && ball === 0) return `${strike}스트라이크`;
    if (strike === 0 && ball !== 0) return `${ball}볼`;
    if (strike === 0 && ball === 0) return "낫싱";
    return `${ball}볼 ${strike}스트라이크`;
  }
}

module.exports = App;
