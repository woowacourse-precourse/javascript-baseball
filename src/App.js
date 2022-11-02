const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    
    let computerNumber = createComputerNumber();
    
    readInputNumber();
  }
}

function createComputerNumber() {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join("");
}

function readInputNumber() {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
    console.log();
  });
}

module.exports = App;
