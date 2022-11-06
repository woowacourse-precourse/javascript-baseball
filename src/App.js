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
    return computer;
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
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.\n");
    const comNum = this.makeComputerNumber();
    MissionUtils.Console.readLine("숫자를 입력해주세요:", (num) => {
      this.checkError(num);
      const userNum = String(num).split("");
      const ballCnt = this.checkBall(comNum, userNum);
      const strikeCnt = this.checkStrike(comNum, userNum);
      this.printResult(ballCnt, strikeCnt);
    });
  }
}

module.exports = App;
