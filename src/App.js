const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    readInputNumber();
  }
}

function readInputNumber() {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
    console.log(`입력된 3개의 숫자: ${input}`)
  });
}

module.exports = App;
