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
  strikeCounter(computer, userNumber) {
    let strike = 0;
    let ball = 0;
    for (let idx = 0; idx < computer.length; idx++) {
      let index = userNumber.indexOf(computer[idx]);
      if (index !== -1 && index === idx) strike++;
      else if (index !== -1 && index !== idx) ball++;
    }
    return { ball, strike };
  }
  counterConsole(ball, strike) {
    if (strike === 3) {
      MissionUtils.Console.print("3스트라이크");

      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      MissionUtils.Console.print(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );
      this.restartAndEed();
    } else if (ball > 0 && strike > 0) {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    } else if (ball === 0 && strike > 0)
      MissionUtils.Console.print(`${strike}스트라이크`);
    else if (ball > 0 && strike === 0)
      MissionUtils.Console.print(`${ball}ball`);
    else MissionUtils.Console.print(`낫싱`);
  }
}

module.exports = App;
