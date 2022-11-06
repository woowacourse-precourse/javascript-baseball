// import * as MissionUtils from "@woowacourse/mission-utils";
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.play();
  }

  computerNum() {
    const computerTheeDifferNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return computerTheeDifferNum;
  }

  readInput(query, callback) {
    MissionUtils.Console.readLine(query, (answer) => {
      callback(Number(answer));
    });
  }

  isThreeDifferNum(number) {
    const stringNum = number.toString();
    const numArr = Array.from(stringNum);
    console.log(numArr);
    const set = new Set(numArr);
    console.log(set);
    if ((stringNum != NaN) && (stringNum.length === 3) && (stringNum.length === set.size)) {
      return number;
    } else {
      throw ('서로 다른 세 자리 숫자를 입력하지 않았습니다.\n');
    }
  }

  compareNum(userNum, computerNum) {
    let ballCount = {
      strike: 0,
      ball: 0,
      nothing: 0,
    };
    const stringUserNum = userNum;
    const stringComputerNum = computerNum.toString();
    for (let index = 0; index < 3; index++) {
      if (userNum[index] === computerNum[index]) {
        ballCount.strike++;
        continue;
      } else if (stringComputerNum.match(stringUserNum[index]) === stringUserNum[index]) {
        ballCount.ball++;
        continue;
      }
      ballCount.nothing++;
    }

    return ballCount;
  }

  printBallCount(ballCount) {
    if (ballCount.strike > 0) {
      MissionUtils.Console.print('${ballCount.strike}스트라이크');
    }
    if (ballCount.ball > 0) {
      MissionUtils.Console.print('${ballCount.ball}볼');
    }
    if (ballCount.nothing === 3) {
      MissionUtils.Console.print('낫싱');
    }
    MissionUtils.Console.print('\n');
  }

  restartOrExit() {
    Console.readLine('1: 재시작, 2: 종료 (숫자만 입력) :', (answer) => {
      answer = Number(answer);
      if (answer === 1) {
        return new App();
      } else if (answer === 2) {
        gameEixt();
      }
    })
  }

  gameExit() {
    MissionUtils.Console.print('게임을 종료합니다.\n');
    return 0;
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.\n');
    const computerNumCopy = this.computerNum();
    console.log(computerNumCopy);
    
    this.readInput('숫자를 입력해주세요 : ', (Input) => {
      let userNumCopy = Input;
      console.log(userNumCopy);
      try {
        this.isThreeDifferNum(userNumCopy);
      } catch (e) {
        MissionUtils.Console.print(e);
        this.gameExit();
      }

      let ballCount = this.compareNum(userNumCopy, computerNumCopy);
      this.printBallCount(ballCount);
      if (ballCount.strike === 3) {
        console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료\n');
        restartOrExit();
      }
    });
  }
}
new App();

module.exports = App;