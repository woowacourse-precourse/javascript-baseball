const MissionUtils = require("@woowacourse/mission-utils");
class App {
  constructor() {
    this.COMPUTER_NUM = [];
    this.USER_NUM = [];
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }

  startGame() {
    this.computerData();
    this.userData();
  }

  computerData() {
    const COMPUTER_NUM = [];
    while (COMPUTER_NUM.length < 3) {
      const NUM = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER_NUM.includes(NUM)) {
        COMPUTER_NUM.push(NUM);
      }
    }
    return COMPUTER_NUM;
  }

  userData() {
    MissionUtils.Console.readLine("숫자를 입력해주세요: ", (USER_NUM) => {
      this.checkIsValid(USER_NUM);
      this.checkIsRight();
    });
  }

  checkIsValid(USER_NUM) {
    if (USER_NUM === "") {
      throw new Error("입력값이 없습니다. 숫자를 입력해주세요");
    }
    if (USER_NUM.length !== 3) {
      throw new Error("숫자 3개를 입력해주세요.");
    }
    if ([...new Set(USER_NUM.split(""))].length !== 3) {
      throw new Error("중복된 숫자가 존재합니다.");
    }
  }

  checkIsRight() {
    let STRIKE = 0;
    let BALL = 0;

    this.USER_NUM.map((num, idx) => {
      if (this.COMPUTER_NUM[idx] === num) {
        STRIKE++;
      } else {
        this.COMPUTER_NUM.includes(num) ? BALL++ : BALL;
      }
    });

    this.showResult(STRIKE, BALL);
  }

  showResult(STRIKE, BALL) {
    if (STRIKE === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.gameRestart();
    } else {
      this.userData();
    }

    if (STRIKE === 0 && BALL === 0) {
      MissionUtils.Console.print("낫싱");
    } else if (!BALL) {
      MissionUtils.Console.print(`${STRIKE}스트라이크`);
    } else {
      MissionUtils.Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
    }
  }

  gameRestart() {}
}

module.exports = App;
