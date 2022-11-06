const MissionUtils = require('@woowacourse/mission-utils');
const { Random, Console } = MissionUtils;
class App {
  randomNumbers;
  userInputs;

  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.saveUserInputs();
  }

  saveRandomNumbers() {
    this.randomNumbers = [];
    while (this.randomNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.randomNumbers.includes(number)) {
        this.randomNumbers.push(number);
      }
    }
  }

  saveUserInputs() {
    Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.userInputs = answer;
    });
  }

  // 1부터 9까지의 숫자인지 아닌지
  isRangeNumber() {
    const isNumberRegExp = /^[1-9]+$/;
    if (!isNumberRegExp.test(this.userInputs)) {
      throw new Error("1부터 9까지의 숫자만 가능합니다.");
    }
    return true;
  }

  // 입력한 값이 3개인지
  isNumberLengthThree() {
    const answerToArray = [...this.userInputs];
    if (answerToArray.length !== 3) {
      throw new Error("숫자는 3개만 입력할 수 있습니다.");
    }
    return true;
  }
}

const app = new App();
app.play();

module.exports = App;
