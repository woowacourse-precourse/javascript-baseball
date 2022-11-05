const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computerNumber = this.createComputerNumber();
    const userNumber = this.inputUserNumber();
    // console.log(computerNumber, userNumber);
  }

  // 컴퓨터의 숫자 랜덤으로 생성한다. (1부터 9까지 서로 다른 수로 이루어진 3자리의 수)
  createComputerNumber() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join("");
  }

  // 사용자에게 숫자를 입력 받는다.
  inputUserNumber() {
    let userNumber;

    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (num) => {
      userNumber = num;
    });
    return userNumber;
  }
}

const app = new App();
app.play();
module.exports = App;
