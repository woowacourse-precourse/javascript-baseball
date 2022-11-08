const MissionUtils = require("@woowacourse/mission-utils");


class App {
  constructor() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  };
  play() {
    let randomNumber = [];
    randomNumber = createRandomNumber();
  }
}

function createRandomNumber() {
  let randomNumber = [];
  let tempNumber;

  while (randomNumber.length < 3) {
    tempNumber = MissionUtils.Random.pickNumberInRange(1,9);
    randomNumber.push(tempNumber);
  }
  return randomNumber;
}

module.exports = App;