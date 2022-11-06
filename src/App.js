const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  COMPUTER_NUMBER = [];

  play() {
    this.start();
  }

  start() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  randomNum() {
    COMPUTER_NUMBER = pickUniqueNumbersInRange(1, 9, 3);

    return COMPUTER_NUMBER;
  }

  playerInput() {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.checkNumber(input);
    });
  }

  checkNumber(input) {
    if (input.length !== 3) throw `숫자를 3개만 입력해 주세요.`;
    if (
      input.length === 3 &&
      (input[0] === input[1] || input[0] === input[2] || input[1] === input[2])
    )
      throw `서로 다른 숫자 3개를 입력해 주세요.`;
    if (isNaN(input)) throw `숫자 값만 입력 가능해요.`;
    if (input.length === 3) this.compareNumber(input);
  }

  compareNumber(input) {
    let BALL = 0;
    let STRIKE = 0;

    for (let i = 0; i < this.COMPUTER_NUMBER; i++) {
      if (this.COMPUTER_NUMBER[i] === input[i]) STRIKE++;
      if (this.COMPUTER_NUMBER.indexOf(input[i]) >= 0) BALL++;
    }
  }
}

module.exports = App;
