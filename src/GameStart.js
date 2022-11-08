const MissionUtils = require("@woowacourse/mission-utils");

class GameStart {
  constructor() {
    this.COMPUTER_NUM = [];
    this.USER_NUM = [];
  }

  startGame() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.computerData();
    this.userData();
  }

  computerData() {
    this.COMPUTER_NUM = [];
    while (this.COMPUTER_NUM.length < 3) {
      const NUM = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.COMPUTER_NUM.includes(NUM)) {
        this.COMPUTER_NUM.push(NUM);
      }
    }
  }

  userData() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 :", (USER_NUM) => {
      this.checkIsValid(USER_NUM);
      this.checkIsRight();
    });
  }

  checkIsValid(USER_NUM) {
    if (USER_NUM === "") {
      throw "입력값이 없습니다. 숫자를 입력해주세요";
    }
    if (USER_NUM.length !== 3) {
      throw "숫자 3개를 입력해주세요.";
    }
    if (USER_NUM.includes("0")) {
      throw "0을 포함하지 않습니다";
    }

    this.USER_NUM = [...USER_NUM].map((NUM) => parseInt(NUM));
    if (this.USER_NUM.includes(NaN)) throw "잘못된 입력값 입니다.";

    const isRepeat = [...new Set(USER_NUM.split(""))].length !== 3;
    if (isRepeat) throw "중복된 숫자가 존재합니다.";
  }

  checkIsRight() {
    let STRIKE = 0;
    let BALL = 0;

    this.USER_NUM.map((elem, idx) => {
      if (this.COMPUTER_NUM[idx] === elem) {
        STRIKE++;
      } else {
        this.COMPUTER_NUM.includes(elem) ? BALL++ : BALL;
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

  gameRestart() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (OPTION_NUM) => {
        this.gameOption(OPTION_NUM);
      }
    );
  }

  gameOption(OPTION_NUM) {
    if (OPTION_NUM === "1") {
      this.startGame();
    } else if (OPTION_NUM === "2") {
      MissionUtils.Console.close();
    } else {
      throw "1과 2의 숫자만 입력하실 수 있습니다";
    }
  }
}

module.exports = GameStart;
