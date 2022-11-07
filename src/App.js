const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.createComputerNum();
  }

  // 컴퓨터가 랜덤으로 숫자 만들기
  createComputerNum() {
    const computerNum = [];
    while (computerNum.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      number = number.toString();
      if (!computerNum.includes(number)) {
        computerNum.push(number);
      }
    }
    MissionUtils.Console.print(computerNum);
    this.playGame(computerNum);
  }

  playGame(computerNum) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userNum) => {
      if (this.validateNum(userNum)) {
        this.compareNum(computerNum, userNum);
      }
    });
  }

  // 사용자가 입력한 숫자가 타당한 숫자인지 체크하는 메소드
  validateNum(userNum) {
    // MissionUtils.Console.print(userNum);
    if (userNum.length !== 3) {
      throw new Error("3자리 수를 입력해주세요");
    }
    if (userNum.includes(0)) {
      throw new Error("0을 제외한 수를 입력해주세요");
    }
    if (new Set(userNum).size !== 3) {
      throw new Error("중복이 없는 수를 입력해주세요");
    }
    return true;
  }

  // 숫자 비교하는 메소드
  compareNum(computerNum, userNum) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < userNum.length; i++) {
      if (computerNum.indexOf(userNum[i]) === i) {
        strike += 1;
        continue;
      }
      if (computerNum.includes(userNum[i])) {
        ball += 1;
      }
    }
    this.compareResult(computerNum, strike, ball);
  }

  //결과 나타내는 메소드
  compareResult(computerNum, strike, ball) {
    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print("낫싱");
      return this.playGame(computerNum);
    } else if (strike === 0) {
      MissionUtils.Console.print(`${ball}볼`);
      return this.playGame(computerNum);
    } else if (ball === 0) {
      if (strike === 3) {
        MissionUtils.Console.print(`${strike}스트라이크`);
        MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        return this.gameEndCeck();
      }
      MissionUtils.Console.print(`${strike}스트라이크`);
      return this.playGame(computerNum);
    } else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      return this.playGame(computerNum);
    }
  }

  gameEndCeck() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (isEnd) => {
        if (isEnd == 1) {
          return this.createComputerNum();
        } else if (isEnd == 2) {
          MissionUtils.Console.close();
        } else {
          throw new Error("1 또는 2를 입력하세요");
        }
      }
    );
  }
}

const app = new App();
app.play();

module.exports = App;
