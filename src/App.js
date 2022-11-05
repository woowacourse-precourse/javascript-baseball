const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerNumber = [];
    this.playerNumber = [];
  }

  play() {
    const numberList = new Set();
    while (numberList.size < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      numberList.add(randomNumber);
    }
    this.computerNumber.push(...numberList);
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.progressGame();
  }

  progressGame() {
    this.inputNumber();
    const strike = this.getHint();
    this.decideWin(strike);
  }

  inputNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      if (!this.isValid(answer)) {
        throw new Error("중복되지 않는 3개의 숫자를 입력해주세요.");
      } else {
        const data = answer.split("").map((letter) => Number(letter));
        this.playerNumber = [...data];
      }
    });
  }

  isValid(data) {
    if (data.length !== 3) {
      return false;
    }
    if (new Set(data).size !== 3) {
      return false;
    }
    if (isNaN(data)) {
      return false;
    }
    return true;
  }

  getHint() {
    let ball = 0;
    let strike = 0;
    let hint = [];

    this.playerNumber.forEach((num, index) => {
      if (this.computerNumber.includes(num)) {
        this.computerNumber[index] === num ? strike++ : ball++;
      }
    });

    if (ball !== 0) {
      hint.push(`${ball}볼`);
    }
    if (strike !== 0) {
      hint.push(`${strike}스트라이크`);
    }
    if (hint.length === 0) {
      hint.push("낫싱");
    }

    MissionUtils.Console.print(hint.join(" "));
    return strike;
  }

  decideWin(strike) {
    if (strike === 3) {
      this.gameOver();
    } else {
      this.progressGame();
    }
  }

  gameOver() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (answer) => {
        if (answer === "1") {
          this.initialize();
          this.play();
        } else if (answer === "2") {
          this.initialize();
          return;
        } else {
          throw new Error("1 또는 2를 입력해주세요.");
        }
      }
    );
  }

  initialize() {
    this.computerNumber = [];
    this.playerNumber = [];
  }
}

module.exports = App;
