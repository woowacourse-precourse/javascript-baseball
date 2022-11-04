const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  };

  play() {
    let randomNumber = [];
    randomNumber = createRandom();
  }
}

function createRandom() {
  let randomNumber = [];
  let tempForRandom;

  while (randomNumber.length < 3) {
    tempForRandom = MissionUtils.Random.pickNumberInRange(1,9);
    randomNumber.push(tempForRandom);
  }

  return randomNumber;
}

module.exports = App;