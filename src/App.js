const MissionUtils = require("@woowacourse/mission-utils");

class App {
  generationRandomAnswer() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  userInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요.", (inputNum) => {
      if (this.userInputvalidation(inputNum)) {
        console.log(`숫자를 입력해주세요 : ${inputNum}`);
        this.showResult(inputNum);
      } else {
        const error = new Error("유효한 값이 아닙니다");
        MissionUtils.Console.close();
        throw error;
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
      MissionUtils.Console.print("낫싱");
    } else if (!result.strikeNum) {
      MissionUtils.Console.print(result.ballNum + "볼");
    } else if (!result.ballNum) {
      MissionUtils.Console.print(result.strikeNum + "스트라이크");
    } else {
      MissionUtils.Console.print(
        `${result.ballNum}볼 ${result.strikeNum}스트라이크`
      );
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
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine(
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
    MissionUtils.Console.print(endNumber);
    switch (endNumber) {
      case "1":
        this.playProcess();
        break;

      case "2":
        MissionUtils.Console.print("게임종료");
        MissionUtils.Console.close();
        break;

      default:
        this.gameEnd();
        break;
    }
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.playProcess();
  }

  playProcess() {
    this.randomAnswer = this.generationRandomAnswer();
    this.userInput();
  }
}

module.exports = App;
