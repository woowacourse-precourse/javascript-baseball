const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computerNumber = this.createComputerNumber();
    const userNumber = this.inputUserNumber();
    console.log(computerNumber, userNumber);
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
      const number = this.vaildCheck(num);
      number = userNumber;
    });
    return userNumber;
  }

  // 사용자가 입력한 숫자 유효성 검사
  vaildCheck(number) {
    const set = new Set(number);
    const len = number.length;
    //  입력한 수가 3자리 수인가
    if (len !== 3) {
      throw "숫자를 입력하세요.";
    }
    // 서로 다른 숫자인가
    if (len === set.size) {
      throw "서로 다른 수를 입력하세요.";
    }
    // 1 ~ 9 범위에 해당하는 수를 입력했는가
    [...number].map((num, index) => {
      if (!(parseInt(num) <= 1 && parseInt(num) <= 9)) {
        throw "1 ~ 9 범위에 해당하는 숫자를 입력하세요.";
      }
    });
    return number;
  }
}

const app = new App();
app.play();
module.exports = App;
