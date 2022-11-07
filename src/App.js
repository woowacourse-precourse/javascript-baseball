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

  isThreeDifferNum(numArr) {
    const set = new Set(numArr);
    const isNumber = Number(numArr.join(''));
    console.log(set);
    if (isNumber && (numArr.length === 3) && (numArr.length === set.size)) {
      return true;
    } else {
      throw ('서로 다른 세 자리 숫자를 입력하지 않았습니다.\n');
    }
  }

  compareNum(userNumArr, computerNumArr) {
    let ballCount = {
      strike: 0,
      ball: 0,
      nothing: 0,
    };

    //match함수를 사용하기 위해 computerNum을 문자열로 변경
    const stringComputerNum = computerNumArr.join('');
    console.log(stringComputerNum);
    for (let index = 0; index < 3; index++) {
      if (userNumArr[index] === computerNumArr[index]) {
        ballCount.strike++;
        console.log("스트라이크" + ballCount.strike);
        continue;
      } else if (stringComputerNum.match(userNumArr[index]) === userNumArr[index]) {
        ballCount.ball++;
        console.log("볼" + ballCount.ball);
        continue;
      }
      ballCount.nothing++;
      console.log("낫싱" + ballCount.nothing);
    }

    return ballCount;
  }

  printBallCount(ballCount) {
    if (ballCount.strike > 0) {
      MissionUtils.Console.print(ballCount.strike + ' 스트라이크');
    }
    if (ballCount.ball > 0) {
      MissionUtils.Console.print(ballCount.ball + ' 볼');
    }
    if (ballCount.nothing === 3) {
      MissionUtils.Console.print('낫싱');
    }
    MissionUtils.Console.print('\n');
  }

  restartOrExit() {
    this.readInput('1: 재시작, 2: 종료 (숫자만 입력) :', (answer) => {
      if (answer === 1) {
        return new App();
      } else if (answer === 2) {
        return this.gameExit();
      }
    });
  }


  gameExit() {
    MissionUtils.Console.print('게임을 종료합니다.\n');
    return 0;
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.\n');
    const stringComputerNumArr = this.computerNum().map(function (element) {
      return element.toString();
    });
    console.log(stringComputerNumArr);

    this.readInput('숫자를 입력해주세요 : ', (Input) => {
      let stringUserNumArr = Array.from(Input.toString());
      console.log(stringUserNumArr);
      try {
        this.isThreeDifferNum(stringUserNumArr);
      } catch (e) {
        MissionUtils.Console.print(e);
        return this.gameExit();
      }

      let ballCount = this.compareNum(stringUserNumArr, stringComputerNumArr);
      this.printBallCount(ballCount);
      if (ballCount.strike === 3) {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료\n');
        this.restartOrExit();
      }
    });
  }
}
new App();

module.exports = App;