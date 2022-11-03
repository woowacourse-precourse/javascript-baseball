const MissionUtils = require("@woowacourse/mission-utils");
class App {
  print(message) {
    MissionUtils.Console.print(message);
  }
  pickComputerNum() {
    return MissionUtils.Random.pickNumberInRange(1, 9);
  }
  getUserNum() {
    let userNum;
    MissionUtils.Console.readLine("숫자를 입력해주세요 :", (answer) => {
      userNum = answer;
      this.print(`숫자를 입력해주세요 : ${answer}`);
    });
    return userNum;
  }
  play() {
    this.print("숫자 야구 게임을 시작합니다.");
    const computerNum = this.pickComputerNum();
    const userNum = this.getUserNum();
    console.log(userNum);
  }
}

module.exports = App;
