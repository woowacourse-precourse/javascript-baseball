const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }

  startGame() {
    this.initRandomNums();
    this.getResultOfUserInput();
  }

  initRandomNums() {
    this.randomNums = this.getRandomNums();
  }

  getRandomNums() {
    const randomNums = [];
    while (randomNums.length < 3) {
      let randomNum = Random.pickNumberInRange(1, 9);
      if (!randomNums.includes(randomNum)) randomNums.push(randomNum);
    }
    return randomNums;
  }

  getResultOfUserInput() {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.compareNums(this.checkUserInput(input));
    });
  }

  checkUserInput(input) {
    if (isNaN(parseInt(input))) throw Error("숫자를 입력해주세요.");
    if (input.length !== 3) throw Error("3자릿수의 숫자를 입력해주세요.");
    if (new Set(input).size < 3) throw Error("중복된 숫자는 제외해주세요.");
    if (!/^[1-9]{3}$/.test(input))
      throw Error("1~9 사이의 숫자로 구성된 3자릿수의 숫자를 입력해주세요.");

    return input.split("").map((it) => parseInt(it));
  }

  compareNums(userNums) {
    const result = {
      strike: 0,
      ball: 0,
    };

    for (let i = 0; i < 3; i++) {
      if (this.isStrike(this.randomNums, userNums[i], i)) {
        result.strike += 1;
      } else if (this.isBall(this.randomNums, userNums[i], i)) {
        result.ball += 1;
      }
    }

    const resultMessage = this.getResultMessage(result);
    Console.print(resultMessage);
    this.checkResultMessage(resultMessage);
  }

  isStrike(answer, number, idx) {
    return answer[idx] === number;
  }

  isBall(answer, number, idx) {
    return answer[idx] !== number && answer.includes(number);
  }

  getResultMessage({ ball, strike }) {
    let resultMessage = "낫싱";

    if (ball > 0 && strike === 0) resultMessage = `${ball}볼`;
    if (ball === 0 && strike > 0) resultMessage = `${strike}스트라이크`;
    if (ball > 0 && strike > 0) resultMessage = `${ball}볼 ${strike}스트라이크`;

    return resultMessage;
  }

  checkResultMessage(message) {
    if (message === "3스트라이크") {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
        (input) => {
          if (input === "1") {
            return this.startGame();
          } else if (input === "2") {
            return Console.close();
          } else throw Error("1 또는 2를 입력해주세요.");
        }
      );
    } else {
      this.getResultOfUserInput();
    }
  }
}

const app = new App();
app.play();

module.exports = App;
