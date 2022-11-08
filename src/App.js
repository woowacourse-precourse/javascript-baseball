const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerNumberArr = [];
  }

  gameStartMessage() {
    return MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  computerChoiceNumber() {
    this.computerNumber = "";
    while (this.computerNumber.length != 3) {
      const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(RANDOM_NUMBER)) {
        this.computerNumber += `${RANDOM_NUMBER}`;
      }
    }
    MissionUtils.Console.print(this.computerNumber);
    this.computerNumberArr = this.computerNumber
      .toString()
      .split("")
      .map((x) => parseInt(x));
  }

  userInputMessage() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      this.checkInputError(userInput);
    });
  }

  checkInputError(input) {
    var inputArr = input.split("").map((x) => parseInt(x));

    if (inputArr.length != 3) {
      throw new Error("입력 오류입니다.");
    }
    for (var inputNumber of inputArr) {
      if (inputNumber < 1) {
        throw new Error("입력 오류입니다.");
      }
    }
    const INPUT_SET = new Set(inputArr);
    if (INPUT_SET.size != inputArr.length) {
      throw new Error("입력 오류입니다.");
    }
    this.BallOrStrike(inputArr, this.computerNumberArr);
  }

  BallOrStrike(userArr, comArr) {
    var strikeCnt = 0;
    var ballCnt = 0;
    for (var index = 0; index < 3; index++) {
      if (userArr[index] == comArr[index]) {
        strikeCnt += 1;
      } else {
        if (comArr.includes(userArr[index])) {
          ballCnt += 1;
        }
      }
    }
    this.printBallOrStrike(ballCnt, strikeCnt);
  }

  printBallOrStrike(ballCnt, strikeCnt) {
    var printHint = "";
    if (strikeCnt == 3) {
      MissionUtils.Console.print(
        "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
      );
      this.gameRestart();
    } else if (strikeCnt == 0 && ballCnt == 0) {
      MissionUtils.Console.print("낫싱");
      this.userInputMessage();
    } else {
      printHint += ballCnt == 0 ? "" : `${ballCnt}볼 `;
      printHint += strikeCnt == 0 ? "" : `${strikeCnt}스트라이크`;
      MissionUtils.Console.print(printHint);
      this.userInputMessage();
    }
  }

  gameRestart() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요\n",
      (userRestartInput) => {
        if (userRestartInput == 1) {
          this.computerChoiceNumber();
          this.userInputMessage();
        } else {
          MissionUtils.Console.print("게임 종료");
        }
      }
    );
  }

  play() {
    this.gameStartMessage();
    this.computerChoiceNumber();
    this.userInputMessage();
  }
}

const app = new App();
app.play();

module.exports = App;
