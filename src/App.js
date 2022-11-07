const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.selectComputerNumber = [];
    this.inputNumber = [];
  }

  getHint() {
    // 힌트를 출력하기 전에, 스트라이크와 볼의  개수를 얻음
    let strike = 0;
    let ball = 0;
    for (let number of this.selectComputerNumber) {
      // 스트라이크
      if (
        this.inputNumber.includes(number) &&
        this.selectComputerNumber.indexOf(number) ===
          this.inputNumber.indexOf(number)
      ) {
        strike += 1;
      }
      // 볼
      else if (
        this.inputNumber.includes(number) &&
        this.selectComputerNumber.indexOf(number) !==
          this.inputNumber.indexOf(number)
      ) {
        ball += 1;
      }
    }
    // 스트라이크와 볼의 개수를 넘겨주면서 화면에 출력
    this.printHint(strike, ball);
  }

  printHint(strike, ball) {
    // 볼이 없고, 스트라이크만 있을 경우
    if (ball === 0 && strike !== 0) {
      // 3스트라이크가 아닐 경우
      if (strike !== 3) {
        MissionUtils.Console.print(`${strike}스트라이크`);
        this.inputNumber = [];
        this.inputNum();
      }
      // 3스트라이크일 경우
      else {
        MissionUtils.Console.print(`${strike}스트라이크`);
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.inputNumber = [];
        this.restartOrExit();
      }
    }
    // 스트라이크가 없고, 볼만 있을 경우
    else if (strike === 0 && ball !== 0) {
      MissionUtils.Console.print(`${ball}볼`);
      this.inputNumber = [];
      this.inputNum();
    }
    // 아무것도 맞추지 못한 경우
    else if (strike === 0 && ball === 0) {
      MissionUtils.Console.print("낫싱");
      this.inputNumber = [];
      this.inputNum();
    }
    // 스트라이크와 볼의 개수가 1개이상일 경우
    else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      this.inputNumber = [];
      this.inputNum();
    }
  }

  restartOrExit() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (number) => {
        if (number === "1") {
          this.selectComputerNumber = [];
          this.selectRandomNum();
          this.inputNum();
        } else if (number === "2") {
          MissionUtils.Console.close();
        } else {
          MissionUtils.Console.print("입력오류(1 또는 2)");
          this.restartOrExit();
        }
      }
    );
  }

  inputNum() {
    // 사용자의 숫자 입력
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
      // 예외 처리
      this.inputException(number);

      // 힌트 출력
      this.getHint();
    });
  }

  inputException(number) {
    if (number.includes("-")) {
      throw "입력 오류(양수만)";
    }
    if (number.length !== 3) {
      throw "입력 오류(3글자)";
    }
    if (isNaN(number)) {
      throw "입력 오류(숫자만)";
    }
    if (number.includes("0")) {
      throw "입력 오류(0은 제외)";
    }
    for (let i = 0; i < number.length; i++) {
      if (!this.inputNumber.includes(Number(number[i]))) {
        this.inputNumber.push(Number(number[i]));
      } else {
        throw "입력 오류(서로 다른 3자리수)";
      }
    }
  }

  selectRandomNum() {
    // 컴퓨터의 1~9까지 서로다른 3자리의 숫자 선택
    while (this.selectComputerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.selectComputerNumber.includes(number)) {
        this.selectComputerNumber.push(number);
      }
    }
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    this.selectRandomNum();
    this.inputNum();
  }
}

module.exports = App;
