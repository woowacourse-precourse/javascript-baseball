const MissionUtils = require("@woowacourse/mission-utils");
class App {
  constructor() {
    this.repit = true;
    this.game = true;
  }
  play() {
    if (this.repit) console.log("숫자 야구 게임을 시작합니다.");
    this.repit = false;

    const computer = this.computerNumber();

    while (this.game) {
      this.compare(computer);
    }
  }
  computerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(String(number));
      }
    }
    return computer;
  }
  compare(computer) {
    MissionUtils.Console.readLine("숫자를 입력해주세요", (answer) => {
      const userNumber = this.checkNumber(answer);
      console.log(`숫자를 입력해주세요 : ${answer}`);

      const { ball, strike } = this.strikeCounter(computer, userNumber);

      this.counterConsole(ball, strike);
    });
  }
  checkNumber(answer) {
    let userNumber = String(answer);
    if (userNumber.length !== 3) throw "예외";

    let check = /^[1-9]+$/;
    for (let i = 0; i < userNumber.length; i++) {
      if (!check.test(userNumber[i])) throw "예외";
    }

    return userNumber;
  }
}

module.exports = App;
