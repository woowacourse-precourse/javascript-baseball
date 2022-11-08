const MissionUtils = require("@woowacourse/mission-utils");

class App {
  START_NUM = 1;
  END_NUM = 9;

  constructor() {
    this.random = [];
    this.userInput = [];
  }

  play() {
    this.generateRandomNums();

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    this.getUserInput();
  }

  generateRandomNums() {
    let randomNums = [];

    while (randomNums.length !== 3) {
      let randomNum = MissionUtils.Random.pickNumberInRange(
        this.START_NUM,
        this.END_NUM
      );

      if (!randomNums.includes(randomNum))
        randomNums = [...randomNums, randomNum];
    }
    this.random = randomNums;
  }

  getUserInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answers) => {
      if ((answers + "").length !== 3)
        throw new RangeError("3자리 숫자를 입력해주세요");
      else if ((answers + "").length !== new Set([...(answers + "")]).size)
        throw new Error("중복된 숫자를 입력할 수 없습니다.");

      MissionUtils.Console.close();
      this.userInput = [...answers];
      this.compareToUserInput();
    });
  }

  compareToUserInput() {
    const result = {};

    this.random.forEach((randomNum, i) => {
      if (randomNum === +this.userInput[i]) {
        result.strike = (result.strike ?? 0) + 1;
      } else if (this.random.includes(+this.userInput[i])) {
        result.ball = (result.ball ?? 0) + 1;
      }
    });

    this.printResult(result);
  }

  printResult({ strike, ball }) {
    let str = "";

    if (strike && ball) {
      str = `${ball}볼 ${strike}스트라이크`;
    } else if (strike && !ball) {
      str = `${strike}스트라이크`;
    } else if (!strike && ball) {
      str = `${ball}볼`;
    } else {
      str = `낫싱`;
    }

    MissionUtils.Console.print(str);

    return strike === 3 ? this.continueOrQuit() : this.getUserInput();
  }

  continueOrQuit() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요",
      (answers) => {
        if (answers === "1") this.play();
        else if (answers === "2") return MissionUtils.Console.close();
      }
    );
  }
}

const app = new App();
app.play();

module.exports = App;
