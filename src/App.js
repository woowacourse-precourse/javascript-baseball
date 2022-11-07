const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const validator = require("./Validate");
let randomArr = [0, 0, 0];

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다");
    randomArr = this.getRandomNumber();
    this.runGame();
  }

  runGame() {
    let result;
    Console.readLine("숫자를 입력해주세요: ", (inputStr) => {
      const inputArr = this.validateInput(inputStr);
      result = this.checkCount(inputArr);
      this.checkResult(result);
    });
  }

  checkResult(result) {
    if (!result) {
      this.runGame();
    } else {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.inputAgain();
    }
  }

  checkAgain(input) {
    if (input == 1) {
    } else if (input == 2) {
      return;
    }
  }

  inputAgain() {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      this.checkAgain()
    );
  }

  getRandomNumber() {
    randomArr[0] = MissionUtils.Random.pickNumberInRange(1, 9);
    randomArr[1] = MissionUtils.Random.pickNumberInRange(1, 9);
    randomArr[2] = MissionUtils.Random.pickNumberInRange(1, 9);

    while (randomArr[0] == randomArr[1]) {
      randomArr[1] = MissionUtils.Random.pickNumberInRange(1, 9);
    }
    while (randomArr[1] == randomArr[2] || randomArr[0] == randomArr[2]) {
      randomArr[2] = MissionUtils.Random.pickNumberInRange(1, 9);
    }
    return randomArr;
  }

  validateInput(inputStr) {
    if (
      !validator.isLengthOk(inputStr) ||
      !validator.isNumber(inputStr) ||
      !validator.isDifferent(inputStr) ||
      !validator.isRangeStr(inputStr)
    )
      throw Error("입력 형식이 맞지 않습니다.");

    const inputArr = inputStr.split("").map(Number);
    return inputArr;
  }

  checkCount(inputArr) {
    let count = [0, 0];
    for (let i = 0; i < 3; i++) {
      this.checkOne(inputArr, i, count);
    }

    this.saveCountMent(count);

    if (count[1] === 3) return true;
    return false;
  }

  checkOne(inputArr, i, count) {
    if (randomArr[i] === inputArr[i]) {
      count[1]++;
    } else if (randomArr.includes(inputArr[i])) {
      count[0]++;
    }
  }

  saveCountMent(count) {
    if (count[0] === 0 && count[1] === 0) {
      Console.print("낫싱");
    } else if (count[1] === 0) {
      Console.print(count[0] + "볼");
    } else if (count[0] === 0) {
      Console.print(count[1] + "스트라이크");
    } else {
      Console.print(count[0] + "볼 " + count[1] + "스트라이크");
    }
  }
}

const numberBaseball = new App();

numberBaseball.play();

module.exports = App;
