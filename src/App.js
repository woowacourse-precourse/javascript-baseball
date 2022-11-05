const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  START = "숫자 야구 게임을 시작합니다.";
  REQUEST_NUMBER = "숫자를 입력해주세요 : ";
  THREE_STRIKE = "3스트라이크";
  END = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
  AGAIN_OR_END = "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";

  answer = "";
  userInput = "";

  async play() {
    this.print(this.START);
    this.answer = this.makeBaseballGameAnswer();

    console.log(this.answer);

    while (this.isGameEnd()) {
      const userInput = await this.getPlayerInput(this.REQUEST_NUMBER);
      this.userInput = userInput;

      this.print(this.calculateCountWithUserInput(userInput));
    }

    this.print(this.END);

    const newGameOrEnd = await this.getPlayerInput(this.AGAIN_OR_END);

    if (newGameOrEnd === "1") await this.play();
    else Console.close();
  }

  print(message) {
    Console.print(message);
  }

  calculateCountWithUserInput(userInput) {
    let ball = 0,
      strike = 0;

    Array.from(userInput)
      .filter((number) => {
        if (this.answer.includes(number)) return number;
      })
      .forEach((number, index) => {
        if (this.answer.indexOf(number) === index) {
          strike += 1;
        } else {
          ball += 1;
        }
      });

    if (strike === 0 && ball === 0) {
      return "낫싱";
    } else if (strike === 0) {
      return `${ball}볼`;
    } else if (ball === 0) {
      return `${strike}스트라이크`;
    } else {
      return `${ball}볼 ${strike}스트라이크`;
    }
  }

  isGameEnd() {
    return this.answer !== this.userInput;
  }

  makeBaseballGameAnswer() {
    return Array.from({ length: 3 }, () =>
      Random.pickNumberInRange(1, 9).toString()
    ).join("");
  }

  async getPlayerInput(question) {
    return new Promise((resolve) => {
      Console.readLine(question, (userInput) => {
        resolve(userInput);
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
