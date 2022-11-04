const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    this.Answer = null;
    Console.print("숫자 야구 게임을 시작합니다.");
    this.Answer = this.makeComputerArr();
    console.log(this.Answer);
    this.makeInputNum();
  }

  restart() {
    this.play();
  }

  resultChoice(flag) {
    if (flag) {
      this.end();
    } else {
      this.makeInputNum();
    }
  }

  makeComputerArr() {
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
      const inputArr = this.inputCheck(input);
      const resultText = this.compare(inputArr);
      console.log(resultText);
      this.resultChoice(resultText);
    });
  }

  compare(userInput) {
    const answerArr = this.Answer;
    let ball = 0;
    let strike = 0;
    let resultText = "";
    console.log(`받은값${userInput}`);
    console.log(`정답${answerArr}`);

    userInput.map((num, i) => {
      if (answerArr.includes(num)) {
        if (num === answerArr[i]) {
          strike += 1;
        } else {
          ball += 1;
        }
      }
    });
    if (ball !== 0) resultText += `${ball}볼 `;
    if (strike !== 0) resultText += `${strike}스트라이크`;
    if (resultText === "") resultText += `낫싱`;
    Console.print(resultText);
    return resultText === "3스트라이크";
  }

  end() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (input) => {
        if (input === 1) {
          this.restart();
        }
        if (input === 2) return "종료";
      }
    );
  }
}

const app = new App();
app.play();
module.exports = App;
