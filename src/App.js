const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    // 컴퓨터가 랜덤으로 숫자 만들기
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
      if (this.validateNum(computerNum, userNum)) {
        this.compareNum(computerNum, userNum);
      }
    });
  }

  // 사용자가 입력한 숫자가 타당한 숫자인지 체크하는 메소드
  validateNum(computerNum, userNum) {
    // MissionUtils.Console.print(userNum);
    if (userNum.length !== 3) {
      MissionUtils.Console.print(
        "올바른 숫자가 아닙니다. 3자리 수를 입력해주세요"
      );
      return this.playGame(computerNum);
    }
    if (userNum.includes(0)) {
      MissionUtils.Console.print(
        "올바른 숫자가 아닙니다. 0을 제외한 숫자를 입력해주세요"
      );
      return this.playGame(computerNum);
    }
    if (new Set(userNum).size !== 3) {
      MissionUtils.Console.print(
        "올바른 숫자가 아닙니다. 중복되지 않은 숫자를 입력해주세요"
      );
      return this.playGame(computerNum);
    }
    return true;
  }

  // 숫자 비교하는 메소드
  compareNum(computerNum, userNum) {
    let strike = 0;
    let ball = 0;
    MissionUtils.Console.print(computerNum);
    MissionUtils.Console.print(userNum);
    for (let i = 0; i < userNum.length; i++) {
      const index = computerNum.indexOf(userNum[i]);
      MissionUtils.Console.print(index);
      if (index > -1) {
        if (index === i) {
          strike += 1;
        } else {
          ball += 1;
        }
      }
    }

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
      }
      MissionUtils.Console.print(`${strike}스트라이크`);
    } else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      return this.playGame(computerNum);
    }
  }

  //
}

const app = new App();
app.play();

module.exports = App;
