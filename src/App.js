const { Console, Random } = require("@woowacourse/mission-utils");
class App {
  START = "숫자 야구 게임을 시작합니다.";
  REQUEST_NUMBER = "숫자를 입력해주세요 : ";
  THREE_STRIKE = "3스트라이크";
  END = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
  ANSWER = "";

  async play() {
    this.print(this.START);
    this.ANSWER = this.makeBaseballGameAnswer();

    const input = await this.getPlayerInput();
    this.print(this.compareUserInputWithAnswer(input));

    Console.close();
  }

  print(message) {
    Console.print(message);
  }

  compareUserInputWithAnswer(input) {
    if (input === this.ANSWER) return this.THREE_STRIKE + "\n" + this.END;

    let ball = 0,
      strike = 0;

    Array.from(input).forEach((number, index) => {
      if (this.ANSWER.includes(number)) {
        if (this.ANSWER.indexOf(number) === index) {
          strike++;
        } else {
          ball++;
        }
      }
    });

    if (strike === 0 && ball === 0) {
      return "낫싱";
    } else {
      return `${strike}스트라이크 ${ball}볼`;
    }
  }

  makeBaseballGameAnswer() {
    return Array.from({ length: 3 }, () =>
      Random.pickNumberInRange(1, 9).toString()
    ).join("");
  }

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
