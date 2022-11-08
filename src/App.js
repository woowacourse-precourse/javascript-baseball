const { Console, Random } = require("@woowacourse/mission-utils");
const CheckVaild = require("./CheckVaild");
const CompareValue = require("./CompareValue");

class App {
  constructor(cpuNumber, userInput, gameResult) {
    this.cpuNumber = cpuNumber;
    this.userInput = userInput;
    this.gameResult = gameResult;
    this.checkVaild = new CheckVaild();
    this.compareValue = new CompareValue();
  }
  play() {
    Console.print("숫자 야구게임을 시작합니다.");
    this.createNumber();
  }
  createNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.cpuNumber = computer;
    this.gaming();
  }

  gaming() {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.userInput = Array.from(input);
      for (let i = 0; i < this.userInput.length; i++) {
        this.userInput[i] = parseInt(this.userInput[i]);
      }

      this.checking();
    });
  }

  checking() {
    if (this.checkVaild.checkVaildUserInputValue(this.userInput)) {
      this.gameResult = this.compareValue.UserInputValueCompareToCPUAnswer(
        this.cpuNumber,
        this.userInput
      );
      if (this.gameResult == "3스트라이크") {
        Console.print(this.gameResult);
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.replay();
      } else {
        Console.print(this.gameResult);
        this.gaming();
      }
    }
  }

  replay() {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (newGame) => {
        if (newGame == 1) {
          this.play();
        } else if (newGame == 2) {
          Console.print("게임이 종료되었습니다.");
          Console.close();
        } else {
          throw new Error("잘못된 명령어를 입력했습니다.");
        }
      }
    );
  }
}

const bullsAndCows = new App();
bullsAndCows.play();

module.exports = App;
