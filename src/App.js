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
    this.inputNumber();
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
}

module.exports = App;
