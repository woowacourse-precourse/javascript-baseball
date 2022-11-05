const MissionUtils = require("@woowacourse/mission-utils");

class App {
  getComputerNumber = () => {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  };
  isValid = (userNumber) => {
    if (userNumber.length !== 3) throw new Error("숫자 3개를 입력해주세요");
    if (userNumber.size > new Set(userNumber).length)
      throw new Error("중복되지 않는 숫자를 입력해주세요");
    if (userNumber.every((num) => !Number.isInteger(num)))
      throw new Error("숫자를 입력해주세요");
  };
  getUserNumber = () => {
    let userNumber;
    MissionUtils.Console.readLine("숫자를 입력해주세요", (inputNumber) => {
      const userNumber = [...inputNumber];
      try {
        this.isValid(userNumber);
      } catch (error) {
        MissionUtils.Console.print(error);
        MissionUtils.Console.close();
      }
    });
    return userNumber;
  };
  gamePrepare = () => {
    this.computerNumber = this.getComputerNumber();
    this.userNumber = this.getUserNumber();
  };
  gameMatch = () => {
    let strike,
      ball = 0;
    for (let i = 0; i < this.userNumber.length; i++) {
      for (let j = 0; j < this.userNumber.length; j++) {
        if (this.computerNumber[i] === this.userNumber[j]) {
          if (i === k) strike++;
          else ball++;
          break;
        }
      }
    }
    if (strike === 3) MissionUtils.Console.print("스트라이크!");
    if (strike > 0 || ball > 0)
      MissionUtils.Console.print(ball + "볼" + strike + "스트라이크");
    if (!(strike && ball)) MissionUtils.Console.print("낫싱");
  };
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.gamePrepare();
    this.gameMatch();
  }
}

const app = new App();
app.play();

module.exports = App;
