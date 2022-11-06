const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    this.createRandomNum();
  }

  // 컴퓨터 랜덤값 생성 기능
  createRandomNum() {
    const computerInput = [];
    while (computerInput.length < 3) {
      let randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      randomNum = randomNum.toString();
      if (!computerInput.includes(randomNum)) {
        computerInput.push(randomNum);
      }
    }
    this.startGame(computerInput);
  }

  // - 사용자 숫자 입력 기능
  startGame(computerInput) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      if (this.isValidNum(userInput)) {
        userInput = userInput.split("");
        this.compareNum(computerInput, userInput);
      }
    });
  }

  //컴퓨터 숫자와 비교 기능
  compareNum(computerInput, userInput) {
    let STRIKE = 0;
    let BALL = 0;

    for (let i = 0; i < computerInput.length; i++) {
      if (computerInput[i] === userInput[i]) {
        STRIKE += 1;
      } else if (computerInput.includes(userInput[i])) {
        BALL += 1;
      }
    }
    this.printScore(computerInput, STRIKE, BALL);
  }

  // 결과에 따른 값 출력 기능(낫싱,볼/스트라이크,승리)
  printScore(computerInput, STRIKE, BALL) {
    if (STRIKE > 0 && BALL > 0) {
      MissionUtils.Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
      return this.startGame(computerInput);
    } else if (STRIKE === 0 && BALL > 0 && BALL < 3) {
      MissionUtils.Console.print(`${BALL}볼`);
      return this.startGame(computerInput);
    } else if (STRIKE < 3 && STRIKE > 0 && BALL === 0) {
      MissionUtils.Console.print(`${STRIKE}스트라이크`);
      return this.startGame(computerInput);
    } else if (BALL === 0 && STRIKE === 0) {
      MissionUtils.Console.print("낫싱");
      return this.startGame(computerInput);
    }

    if (STRIKE === 3) {
      MissionUtils.Console.print(`${STRIKE}스트라이크`);
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.reStart();
    }
  }

  // 게임 재시작 및 종료 기능
  reStart() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ",
      (insertCoin) => {
        if (insertCoin === "1") {
          return this.createRandomNum();
        } else if (insertCoin === "2") {
          MissionUtils.Console.close();
        } else {
          throw "올바른 숫자를 입력해주세요.";
        }
      }
    );
  }

  //[예외처리] 잘못된 값 입력시 오류 처리 기능
  isValidNum(userInput) {
    if (userInput.length !== 3) {
      throw "3개의 숫자를 입력해주세요.";
    }

    if (isNaN(userInput)) {
      throw "숫자만 입력해주세요.";
    }

    if (new Set(userInput).size !== 3) {
      throw "서로 다른 3자리의 숫자를 입력해주세요.";
    }

    if (userInput.includes("0")) {
      throw "0을 제외한 숫자를 입력해주세요.";
    }
    return true;
  }
}

module.exports = App;
