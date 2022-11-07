const MissionUtils = require("@woowacourse/mission-utils");

class App {
  makeComputerNumber() {
    const COMPUTER_NUMBER = [];
    while (COMPUTER_NUMBER.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER_NUMBER.includes(NUMBER)) {
        COMPUTER_NUMBER.push(NUMBER);
      }
    }
    return COMPUTER_NUMBER.join("");
  }

  checkType(num) {
    if (typeof num != "number") throw "입력값 숫자 아님";
  }
  checkDigit(num) {
    if (num < 123 || num > 987) throw "자릿수 오류";
  }
  checkOverlap(num) {
    const NUMBER = String(num).split("");
    if (
      NUMBER[0] == NUMBER[1] ||
      NUMBER[0] == NUMBER[2] ||
      NUMBER[1] == NUMBER[2]
    )
      throw "입력값 중복 발생";
  }

  checkError(num) {
    let number = Number(num);
    this.checkType(number);
    this.checkDigit(number);
    this.checkOverlap(number);
  }

  countBall(COMNUM, USERNUM) {
    let ballCnt = 0;
    if (COMNUM[0] == USERNUM[1]) ballCnt++;
    if (COMNUM[0] == USERNUM[2]) ballCnt++;
    if (COMNUM[1] == USERNUM[0]) ballCnt++;
    if (COMNUM[1] == USERNUM[2]) ballCnt++;
    if (COMNUM[2] == USERNUM[0]) ballCnt++;
    if (COMNUM[2] == USERNUM[1]) ballCnt++;
    return ballCnt;
  }

  countStrike(COMNUM, USERNUM) {
    let strikeCnt = 0;
    if (COMNUM[0] == USERNUM[0]) strikeCnt++;
    if (COMNUM[1] == USERNUM[1]) strikeCnt++;
    if (COMNUM[2] == USERNUM[2]) strikeCnt++;
    return strikeCnt;
  }

  checkNothing(BALL_CNT, STRIKE_CNT) {
    if (BALL_CNT == 0 && STRIKE_CNT == 0) return 1;
  }

  gameClear(STRIKE_CNT) {
    if (STRIKE_CNT == 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료\n");
      return true;
    } else return false;
  }

  printResult(COM_NUMBER, USER_NUMBER) {
    const BALL_CNT = this.countBall(COM_NUMBER, USER_NUMBER);
    const STRIKE_CNT = this.countStrike(COM_NUMBER, USER_NUMBER);

    if (this.checkNothing(BALL_CNT, STRIKE_CNT)) {
      MissionUtils.Console.print("낫싱\n");
    } else if (BALL_CNT != 0 && STRIKE_CNT != 0) {
      MissionUtils.Console.print(`${BALL_CNT}볼 ${STRIKE_CNT}스트라이크\n`);
    } else if (BALL_CNT == 0 && STRIKE_CNT != 0) {
      MissionUtils.Console.print(`${STRIKE_CNT}스트라이크\n`);
    } else if (BALL_CNT != 0 && STRIKE_CNT == 0) {
      MissionUtils.Console.print(`${BALL_CNT}볼\n`);
    }

    return this.gameClear(STRIKE_CNT);
  }

  askReplay() {
    let replay = true;
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (answer) => {
        if (answer !== "1") {
          replay = false;
          MissionUtils.Console.close();
        }
      }
    );
    return replay;
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.\n");
    let playing = true;

    while (playing) {
      const COM_NUMBER = this.makeComputerNumber();
      let clear = false;
      while (!clear) {
        MissionUtils.Console.readLine("숫자를 입력해주세요:", (num) => {
          this.checkError(num);
          const USER_NUMBER = num.split("");
          clear = this.printResult(COM_NUMBER, USER_NUMBER);
        });
      }
      playing = this.askReplay();
    }
  }
}

module.exports = App;
