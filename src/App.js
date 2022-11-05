const MissionUtils = require("@woowacourse/mission-utils");

class App {
  print(message) {
    return MissionUtils.Console.print(message);
  }

  pickNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  startGame() {
    this.print("숫자 야구 게임을 시작합니다.");
    return this.pickNumbers();
  }

  input() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
        this.userInput = [...answer];
        resolve();
      });
    });
  }

  async inGame() {
    await this.input();
    if (this.userInput.length !== 3) {
      throw new Error("3자리 수를 입력해주세요.");
    }
    if (this.userInput.map()) this.print(this.userInput);
  }

  play() {
    this.startGame();
    this.inGame();
    // await this.input();

    // while (1) {
    //   switch (coin) {
    //     case "1":
    //       break;
    //     case "2":
    //       break;
    //     default:
    //       this.print("잘못입력하셨습니다. 새로시작 : 1 , 종료 : 2");
    //       break;
    //   }
    //   console.log(123);
    // }
    return;
  }
}

const app = new App();
app.play();

module.exports = App;
