const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {}
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const answer = this.getThreeNum();
    this.getUserNum();
  }

  getThreeNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  getUserNum() {
    console.log("시작1");
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
      if (!this.isUserNumValid(number)) throw "입력값이 잘못되었습니다.";
    });
  }

  isUserNumValid(userNum) {
    var userNumArr = userNum.split("");
    var userNumSet = new Set(userNumArr);
    if (userNumSet.size !== userNumArr.length) return false;
    else if (userNum.length !== 3) return false;
    else if (userNum >= "100" && userNum <= "999") return false;
    else if (userNumArr.includes(0)) return false;
    else return true;
  }
}

const app = new App();
app.play();

module.exports = App;
