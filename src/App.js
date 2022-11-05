const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  generateRandomAnswer() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  userInputProcess() {
    Console.readLine("숫자를 입력해주세요.", (inputNum) => {
      if (this.userInputvalidation(inputNum)) {
        console.log(`숫자를 입력해주세요 : ${inputNum}`);
        this.showResult(inputNum);
      } else {
        Console.print(`${inputNum}는(은) 유효하지 않는 값입니다. 게임 종료`);
        Console.close();
        this.throwError("유효하지 않는 값입니다");
      }
    });
  }

  userInputvalidation(inputNum) {
    return Number.isInteger(Number(inputNum)) &&
      Number(inputNum) > 0 &&
      inputNum.length === 3 &&
      new Set(inputNum).size === 3 &&
      !inputNum.includes(0)
      ? true
      : false;
  }

  showResult(userInputNum) {
    const result = {
      ballNum: this.countBalls(userInputNum),
      strikeNum: this.countStrikes(userInputNum),
    };
    if (!result.strikeNum && !result.ballNum) {
      Console.print("낫싱");
    } else if (!result.strikeNum) {
      Console.print(result.ballNum + "볼");
    } else if (!result.ballNum) {
      Console.print(result.strikeNum + "스트라이크");
    } else {
      Console.print(`${result.ballNum}볼 ${result.strikeNum}스트라이크`);
    }
    return result.strikeNum === 3 ? this.gameEnd() : this.userInput();
  }

  countBalls(userInputNum) {
    return this.randomAnswer.reduce((acc, cur, idx) => {
      return userInputNum.includes(cur) && userInputNum.indexOf(cur) !== idx
        ? acc + 1
        : acc;
    }, 0);
  }

  countStrikes(userInputNum) {
    return this.randomAnswer.reduce((acc, cur, idx) => {
      return userInputNum.indexOf(cur) === idx ? acc + 1 : acc;
    }, 0);
  }

  gameEnd() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (endNum) => {
        console.log(
          `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ${endNum}`
        );
        this.gameEndvalidation(endNum);
      }
    );
  }

  gameEndvalidation(endNumber) {
    Console.print(endNumber);
    switch (endNumber) {
      case "1":
        this.playProcess();
        break;

      case "2":
        Console.print("게임종료");
        Console.close();
        break;

      default:
        this.gameEnd();
        break;
    }
  }

  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.playProcess();
  }

  playProcess() {
    this.randomAnswer = this.generateRandomAnswer();
    this.userInputProcess();
  }

  throwError(errorMsg) {
    throw new Error(errorMsg);
  }
}

module.exports = App;
