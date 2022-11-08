const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.randomNums = this.createRandomNums();
  }

  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.getUserInput();
  }

  createRandomNums() {
    const randomNums = [];
    while (randomNums.length < 3) {
      let randomNum = Random.pickNumberInRange(1, 9);
      if (!randomNums.includes(randomNum)) randomNums.push(randomNum);
    }
    return randomNums;
  }

  getUserInput() {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.checkUserInput(input);
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
}

const app = new App();
app.play();

module.exports = App;
