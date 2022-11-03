const { Console, Random } = require("@woowacourse/mission-utils");
class App {
  START = "숫자 야구 게임을 시작합니다.";
  REQUEST_NUMBER = "숫자를 입력해주세요 : ";
  END = "게임 종료";
  ANSWER = "";

  async play() {
    this.print(this.START, true);
    this.ANSWER = this.makeBaseballGameAnswer();

    const input = await this.getPlayerInput();
    console.log(input);
    Console.close();
  }

  print(message, close = false) {
    Console.print(message);
  }

  makeBaseballGameAnswer() {
    return Array.from({ length: 3 }, () =>
      Random.pickNumberInRange(1, 9).toString()
    ).join("");
  }

  // getRandomNumber() {
  //   const maxNumber = 9;
  //   return Math.floor(Math.random() * maxNumber + 1);
  // }

  async getPlayerInput() {
    return new Promise((resolve) => {
      Console.readLine(this.REQUEST_NUMBER, (input) => {
        resolve(input);
      });
    });
  }
}

async function startApp() {
  const app = new App();
  await app.play();
}

startApp();

module.exports = App;
