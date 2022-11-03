const MissionUtils = require("@woowacourse/mission-utils");

class App {
  computerNumber;

  setComputerNumber() {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }
    this.computerNumber = computerNumber;
  }

  splitNumber(number) {
    return (number + "").split("").map((element) => parseInt(element, 10));
  }

  getHint(userNumber) {
    const splitedUserNumber = this.splitNumber(userNumber);

    let ball = 0;
    let strike = 0;

    for (let i = 0; i < this.computerNumber.length; i++) {
      for (let j = 0; j < splitedUserNumber.length; j++) {
        if (this.computerNumber[i] === splitedUserNumber[j] && i === j) {
          strike++;
          continue;
        }
        if (this.computerNumber[i] === splitedUserNumber[j]) {
          ball++;
        }
      }
    }

    return ball > 0 && strike === 0
      ? `${ball}볼`
      : ball === 0 && strike > 0
      ? `${strike}스트라이크`
      : ball > 0 && strike > 0
      ? `${ball}볼 ${strike}스트라이크`
      : "낫싱";
  }

  play() {
    let userNumber;

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.setComputerNumber();

    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
      userNumber = parseInt(number, 10);
      const hint = this.getHint(userNumber);
      MissionUtils.Console.print(hint);
    });
  }
}

new App().play();
module.exports = App;
