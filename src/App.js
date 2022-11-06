const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  play() {
    this.Answer = this.createAnswer();
    console.log(this.Answer);
    this.enterNumber();
  }

  judgeResult(threeStrike) {
    if (threeStrike) return this.endingOption();
    if (!threeStrike) return this.enterNumber();
    throw new Error();
  }

  createAnswer() {
    this.answer = [];
    while (this.answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer.push(number);
      }
    }
    return this.answer;
  }

  inputCheck(inputNumber) {
    if (inputNumber.length !== 3) throw new Error();
    const numberArr = inputNumber.split("").map((x) => {
      if (Number.isNaN(x)) throw new Error();
      return parseInt(x, 10);
    });
    return this.compare(numberArr);
  }

  enterNumber() {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      return this.inputCheck(input);
    });
  }

  compare(numberArr) {
    const answerArr = this.Answer;
    let ball = 0;
    let strike = 0;
    numberArr.map((number, index) => {
      if (answerArr.includes(number)) {
        if (number === answerArr[index]) strike += 1;
        if (number !== answerArr[index]) ball += 1;
      }
    });
    return this.compareResult(ball, strike);
  }

  compareResult(ball, strike) {
    let resultText = "";
    if (ball !== 0) resultText += `${ball}볼 `;
    if (strike !== 0) resultText += `${strike}스트라이크`;
    if (resultText === "") resultText += `낫싱`;
    Console.print(resultText);
    const result = resultText === "3스트라이크";
    return this.judgeResult(result);
  }

  endingOption() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (input) => {
        if (input === "1") {
          return this.play();
        }
        if (input === "2") process.exit();
        if (input < 1 || input > 2 || Number.isNaN(input))
          throw new Error("정해진 값을 입력해주세요.");
      }
    );
  }
}

// todo
// 이름 고민하기
// 기능 분리 다시 생각하기
// 예외 처리 기능 분리해보기

const app = new App();
app.play();
module.exports = App;
