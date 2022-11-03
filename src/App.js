const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
      console.log(`numbers : ${number}`)
    });
  }
}

module.exports = App;
