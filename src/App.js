const MissionUtils = require("@woowacourse/mission-utils");

class App {
  makeComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join("");
  }

  checkType(num) {
    if (typeof num != "Number") throw -1;
  }
  checkDigit(num) {
    if (num < 123 || num > 987) throw -1;
  }
  checkOverlap(num) {
    const number = String(num).split("");
    if (
      number[0] == number[1] ||
      number[0] == number[2] ||
      number[1] == number[2]
    )
      throw -1;
  }

  checkError(num) {
    this.checkType(num);
    this.checkDigit(num);
    this.checkOverlap(num);
  }

  checkBall(comNum, userNum) {
    let ballCnt = 0;
    if (comNum[0] == userNum[1]) ballCnt++;
    if (comNum[0] == userNum[2]) ballCnt++;
    if (comNum[1] == userNum[0]) ballCnt++;
    if (comNum[1] == userNum[2]) ballCnt++;
    if (comNum[2] == userNum[0]) ballCnt++;
    if (comNum[2] == userNum[1]) ballCnt++;
    return ballCnt;
  }

  checkStrike(comNum, userNum) {
    let strikeCnt = 0;
    if (comNum[0] == userNum[0]) strikeCnt++;
    if (comNum[1] == userNum[1]) strikeCnt++;
    if (comNum[2] == userNum[2]) strikeCnt++;
    return strikeCnt;
  }

  checkNothing(ballCnt, strikeCnt) {
    if (ballCnt == 0 && strikeCnt == 0) return 1;
  }

  printResult(ballCnt, strikeCnt) {
    if (this.checkNothing(ballCnt, strikeCnt)) {
      MissionUtils.Console.print("낫싱\n");
    } else if (ballCnt != 0 && strikeCnt != 0) {
      MissionUtils.Console.print(`${ballCnt}볼 ${strikeCnt}스트라이크\n`);
    } else if (ballCnt == 0 && strikeCnt != 0) {
      MissionUtils.Console.print(`${strikeCnt}스트라이크\n`);
    } else if (ballCnt != 0 && strikeCnt == 0) {
      MissionUtils.Console.print(`${ballCnt}볼\n`);
    }
  }

  play() {
    let playing = true;
    while (playing) {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.\n");
      const COM_NUMBER = this.makeComputerNumber();
      let clear = true;
      while (clear) {
        MissionUtils.Console.readLine("숫자를 입력해주세요:", (num) => {
          this.checkError(num);
          const USER_NUMBER = String(num).split("");
          const BALL_CNT = this.checkBall(COM_NUMBER, USER_NUMBER);
          const STRIKE_CNT = this.checkStrike(COM_NUMBER, USER_NUMBER);
          this.printResult(BALL_CNT, STRIKE_CNT);
          if (STRIKE_CNT == 3) {
            MissionUtils.Console.print(
              "3개의 숫자를 모두 맞히셨습니다! 게임종료\n"
            );
            clear = false;
          }
        });
      }
      MissionUtils.Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
        (answer) => {
          if (answer == 2) playing = false;
        }
      );
    }
  }
}

module.exports = App;
