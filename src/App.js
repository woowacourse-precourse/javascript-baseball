const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  COMPUTER_NUMBER = [];

  play() {
    this.start();
    this.playerInput();
  }

  start() {
    Console.print("숫자 야구 게임을 시작합니다.");

    this.COMPUTER_NUMBER = this.randomNum();
  }

  randomNum() {
    const numArr = [];

    for (let i = 0; i < 3; i++) {
      numArr.push(Random.pickNumberInRange(1, 9));
    }

    return numArr;
  }

  playerInput() {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.checkNumber(String(input).split(""), true);
    });
  }

  checkNumber(input, isTrying) {
    if (isTrying && input.length !== 3) throw `숫자를 3개만 입력해 주세요.`;
    if (
      isTrying &&
      (input[0] === input[1] || input[0] === input[2] || input[1] === input[2])
    )
      throw `서로 다른 숫자 3개를 입력해 주세요.`;
    if (isTrying && isNaN(Number(input.join(""))))
      throw `숫자 값만 입력 가능해요.`;
    if (isTrying === false && (Number(input) < 1 || Number(input) > 2))
      throw `1또는 2를 입력하세요.`;
    if (isTrying) this.compareNumber(input.map((str) => Number(str)));
    else this.restart(Number(input));
  }

  compareNumber(input) {
    let BALL = 0;
    let STRIKE = 0;

    for (let i = 0; i < 3; i++) {
      if (this.COMPUTER_NUMBER[i] === input[i]) STRIKE++;
      if (this.COMPUTER_NUMBER.indexOf(input[i]) >= 0) BALL++;
    }

    BALL = BALL - STRIKE;
    this.gameResult([BALL, STRIKE]);
  }

  gameResult(numArr) {
    if (numArr[1] === 3) {
      Console.print(`3스트라이크
      3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
      this.checkRestart();
    } else {
      if (numArr[0] === 0 && numArr[1] === 0) {
        Console.print("낫싱");
        this.playerInput();
      }
      Console.print(
        `${numArr[0] > 0 ? numArr[0] + "볼 " : ""}${
          numArr[1] > 0 ? numArr[1] + "스트라이크" : ""
        }`
      );
      this.playerInput();
    }
  }

  checkRestart() {
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    Console.readLine("", (input) => {
      this.checkNumber(input, false);
    });
  }

  restart(input) {
    if (input === 1) {
      this.COMPUTER_NUMBER = this.randomNum();
      this.playerInput();
    } else {
      Console.close();
    }
  }
}

module.exports = App;
