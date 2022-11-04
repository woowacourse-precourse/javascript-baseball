const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerNumber = [];
    this.playerNumber = [];
    this.isCorrectAnswer = false;
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
    this.getHint();

    if (this.isCorrectAnswer) {
      this.gameOver();
    } else {
      this.progressGame();
    }
  }

  inputNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      if (!this.isValid(answer)) {
        throw new Error();
      } else {
        const data = String(answer)
          .split("")
          .map((letter) => Number(letter));
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
    if (strike === 3) {
      this.isCorrectAnswer = true;
    }
  }

  gameOver() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }
}

module.exports = App;
