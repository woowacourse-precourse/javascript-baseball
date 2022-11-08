const MissionUtils = require("@woowacourse/mission-utils");

class App {
  getInputNumber() {
    let USER_NUM;
    MissionUtils.Cosole.readLine("숫자를 입력해주세요 :", (number) => {
      USER_NUM = String(number).split("");
    });

    if (answer.length > 3) {
      throw "잘못된 값 입력 : 서로 다른 3자리 수를 입력해주세요.";
    }
  }

  getComputerNumber() {
    const COMPUTER_NUM = [];
    while (COMPUTER_NUM.length < 3) { 
      let NUM = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER_NUM.includes(NUM)) {
        COMPUTER_NUM.push(NUM);
      }
    }
  }

  checkStrike(COMPUTER_NUM, USER_NUM) {
    let STRIKE_SCORE = 0;

    for (let i = 0; i < 3; i++) {
      if (COMPUTER_NUM[i] == USER_NUM[i]) {
        STRIKE_SCORE += 1;
      }
    }
    return STRIKE_SCORE;
  }

  checkBall(COMPUTER_NUM, USER_NUM) {
    let BALL_SCORE = 0;

    const intersect = COMPUTER_NUM.filter(x => USER_NUM(x));
    let COUNT_INTERSECT = intersect.length;
    BALL_SCORE = COUNT_INTERSECT - STRIKE_SCORE;
  }

  restartOrFinish() {
    MissionUtils.Console.readLine(
      "재시작 => 1, 종료 => 2", (answer) => {
        if (parseInt(answer) == 1) {
          play();
        } 
        else if(parseInt(answer) == 2) {
          MissionUtils.Console.print("게임 종료");
          return;
        }
      }
    )
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    getComputerNumber();
    getInputNumber();

    if (BALL_SCORE > 0 || STRIKE_SCORE > 0) {
      MissionUtils.Console.print("${BALL_SCORE}볼 ${STRIKE_SCORE}스트라이크");ㄱ
    }
    else if (COUNT_INTERSECT == 0) {
      MissionUtils.Console.print("낫싱");
    }
    else if (STRIKE_SCORE == 3) {
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return;
    }
    restartOrFinish();
  }
}

module.exports = App;