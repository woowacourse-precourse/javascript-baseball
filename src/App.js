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
        // 예외처리 throw 할 곳
        this.isValid(userNumber);
      } catch (error) {
        MissionUtils.Console.print(error);
        MissionUtils.Console.close();
      }
    });
    return userNumber;
  };
  gameStart = () => {
    this.computerNumber = this.getComputerNumber();
    this.userNumber = this.getUserNumber();
  };
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
