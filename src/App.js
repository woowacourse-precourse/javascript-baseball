const MissionUtils = require("@woowacourse/mission-utils");

function printMsg(message) {
  MissionUtils.Console.print(message);
}

function askNumInput() {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
    printMsg(`입력하신 숫자는... ${number} 입니다.`);
  });
}

class App {
  play() {
    printMsg("숫자 야구 게임을 시작합니다.");
    try {
      askNumInput();
    } catch (e) {
      printMsg(e);
    }
  }
}

module.exports = App;
