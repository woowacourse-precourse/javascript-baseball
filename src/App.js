const MissionUtils = require("@woowacourse/mission-utils");
const baseballGameCycle = require("./");
const getResult = require("./getResult");
const createRandomNumbers = require("./createRandomNumbers");

class App {
  play() {
    let answer;
    const randomNumbers = createRandomNumbers();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    baseballGameCycle(randomNumbers);
  }
}

module.exports = App;
