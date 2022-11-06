const MissionUtils = require("@woowacourse/mission-utils");
class App {
  randomNumber = [];
  userInputNumber = [];

  constructor() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
  play() {
    this.makeRandomNumber();
    try {
      this.makeUserInputNumber();
    } catch (err) {
      throw err;
    }
  }

  gameTerminate() {
    MissionUtils.Console.print("게임을 종료합니다.");
    MissionUtils.Console.close();
  }

  checkInputNumber() {
    // 배열 안에 수들이 모두 숫자인지.
    if (this.userInputNumber.includes(NaN)) {
      throw "숫자가 아닌 입력입니다.";
    }

    if (this.userInputNumber.length !== 3) {
      throw "세자리 숫자가 아닙니다!";
    }
    //1 ~ 9의 범위인지
    if (this.userInputNumber.includes(0)) {
      throw "1 ~ 9 범위내어야 합니다";
    }
    //다 다른 수인가. set 사용
    if (new Set(this.userInputNumber).size !== 3) {
      throw "같은 수가 중복입니다";
    }
  }

  makeRandomNumber() {
    let arr = new Set();

    while (arr.size < 3) {
      arr.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    this.randomNumber = Array.from(arr);
  }

  checkStopGameOrNotInput(keepGameOrNot) {
    //게임 계속
    if (keepGameOrNot === "1") {
      this.play();
    }
    //게임 종료.
    else if (keepGameOrNot === "2") {
      this.gameTerminate();
    } else {
      throw "잘못된 입력.";
    }
  }

  stopGameOrNot() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2 를 입력하세요.\n",
      (keepGameOrNot) => {
        try {
          this.checkStopGameOrNotInput(keepGameOrNot);
        } catch (err) {
          this.gameTerminate();
          throw err;
        }
      }
    );
  }

  isThreeStrike() {
    let threeStrike = this.randomNumber.every(
      (value, idx) => value === this.userInputNumber[idx]
    );
    if (threeStrike) {
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.stopGameOrNot();
    }
  }

  makeUserInputNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (inputNumber) => {
      this.userInputNumber = [...inputNumber].map(Number);
      try {
        this.checkInputNumber();
        this.isThreeStrike();
      } catch (e) {
        this.gameTerminate();
        throw e;
      }
    });
  }
}

module.exports = App;
