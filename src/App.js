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
    if (isNumber && (numArr.length === 3) && (numArr.length === set.size)) {
      return true;
    } else {
      throw('서로 다른 세 자리 숫자를 입력하지 않았습니다.\n');
    }
  }

  compareNum(userNumArr, computerNumArr) {
    let ballCount = {
      strike: 0,
      ball: 0,
      nothing: 0,
    };


    for (let index = 0; index < 3; index++) {
      if (userNumArr[index] === computerNumArr[index]) {
        ballCount.strike++;
        continue;
      } else if (computerNumArr.indexOf(userNumArr[index]) > -1) {
        ballCount.ball++;
        continue;
      }
      ballCount.nothing++;
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
  }

  restartOrExit() {
    this.readInput('1: 재시작, 2: 종료 (숫자만 입력) :', (answer) => {
      if (answer === 1) {
        return new App();
      } else if (answer === 2) {
        return this.gameExit();
      } else {
        this.restartOrExit();
      }
    });
  }


  gameExit() {
    throw('게임을 종료합니다.\n');
  }

  userPickNum(stringComputerNumArr) {
    this.readInput('숫자를 입력해주세요 : ', (Input) => {
      let stringUserNumArr = Array.from(Input.toString());
      try {
        this.isThreeDifferNum(stringUserNumArr);
      } catch (e) {
        throw e;
      }

      let ballCount = this.compareNum(stringUserNumArr, stringComputerNumArr);
      this.printBallCount(ballCount);
      if (ballCount.strike === 3) {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료\n');
        return this.restartOrExit();
      } else {
        this.userPickNum(stringComputerNumArr);
      }
    });
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const stringComputerNumArr = this.computerNum().map(function (element) {
      return element.toString();
    });

    this.userPickNum(stringComputerNumArr);
  }
}
new App();

module.exports = App;