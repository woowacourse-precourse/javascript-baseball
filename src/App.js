const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  play() {
    this.Answer = this.makeAnswer();
    console.log(this.Answer);
    this.makeInputNum();
  }

  inputisCorrect(userAnswer) {
    if (userAnswer) return this.endOption();
    if (!userAnswer) return this.makeInputNum();
    throw new Error();
  }

  makeAnswer() {
    this.computer = [];
    while (this.computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
    return this.computer;
  }

  inputCheck(inputString) {
    if (inputString.length !== 3) throw new Error();
    const numberArr = inputString.split("").map((x) => {
      if (Number.isNaN(x)) throw new Error();
      return parseInt(x, 10);
    });
    return numberArr;
  }

  makeInputNum() {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      const inputArray = this.inputCheck(input);
      return this.compare(inputArray);
    });
  }

  compare(userInput) {
    const answerArr = this.Answer;
    let ball = 0;
    let strike = 0;
    userInput.map((num, i) => {
      if (answerArr.includes(num)) {
        if (num === answerArr[i]) strike += 1;
        if (num !== answerArr[i]) ball += 1;
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
    return this.inputisCorrect(result);
  }

  endOption() {
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
