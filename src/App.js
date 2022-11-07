const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.askForNumbers();
  }

  makeRandomNumber() {
    const correctNumbers = new Set();
    while (correctNumbers.size < 3) {
      correctNumbers.add(Random.pickNumberInRange(1, 9));
    }
    return [...correctNumbers].join("");
  }

  askForNumbers() {
    Console.readLine("숫자를 입력해주세요 : ", (receivedNumbers) => {
      this.stirUp(receivedNumbers);
    });
  }

  /**
   * 입력된 숫자(문자 형태)가 유효한지 판별합니다.
   * @param {string} input - 문자열 형식의 숫자
   * @return {boolean}
   */
  isValidInput(input) {
    if (typeof input !== "string") return false;
    const numberArr = input.split("");
    if (input.length !== 3) return false;
    else if (!Number(input)) return false;
    else if (new Set(numberArr).size !== 3) return false;
    else return true;
  }

  /**
   * 입력된 숫자를 받아 유효 여부에 따라 분기를 나눕니다.
   * @param {string} receivedNumbers - 유저가 입력한 문자열 형식의 숫자
   */
  stirUp(receivedNumbers) {
    if (this.isValidInput(receivedNumbers)) {
      const correctNumbers = this.makeRandomNumber();
      this.gradeInput(correctNumbers, receivedNumbers);
    } else {
      throw "잘못된 입력입니다.";
    }
  }

  /**
   * 사용자가 입력한 값을 평가합니다.
   * @param {string} correctNumbers
   * @param {string} receivedNumbers
   */
  gradeInput(correctNumbers, receivedNumbers) {}
}

const app = new App();
app.play();

module.exports = App;
