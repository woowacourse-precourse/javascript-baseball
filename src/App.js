const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    let RANDOM_VALUE = this.getRandomNumber();
    this.inputFromUser(RANDOM_VALUE);
  }

  // 사용자로부터 값 입력받기
  inputFromUser(PC) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (INPUT) => {
      if (this.errorHandler(INPUT)) {
        this.printScore(PC, INPUT);
      } else {
        throw new Error("입력값이 잘못되었습니다.");
      }
    });
  }

  // 점수 판정(볼, 스트라이크)
  judgeScore(USER_INPUT, PC) {
    let SCORE_BOARD = [0, 0];
    let USER = USER_INPUT;

    for (let i=0; i<3; i++) {
      if (PC[i] === USER[i]) {
        SCORE_BOARD[0] += 1;
      }
      else if (PC.includes(USER[i])) {
        SCORE_BOARD[1] += 1;
      }
    }

    return SCORE_BOARD;
  }

  // 게임종료 및 재도전 의사를 묻는 함수
  finishGame() {
    MissionUtils.Console.print("게임 종료");
    MissionUtils.Console.readLine("재시작하려면 1, 게임을 종료하려면 2를 입력하세요\n", 
    (INPUT) => {
      if (INPUT === "1") {
        MissionUtils.Console.print("게임을 재시작합니다.\n\n");
        this.play();
      } else if (INPUT === "2") {
        MissionUtils.Console.close();
      } else {
        throw new Error("입력값이 잘못되었습니다.");
      }
    });
  }  

  // 점수를 계산하고 출력하는 함수
  printScore(PC, USER) {
    let SCORE_BOARD = this.judgeScore(PC, USER);

    let STRIKE = SCORE_BOARD[0];
    let BALL = SCORE_BOARD[1];

    if (STRIKE > 0 && BALL == 0) {
      MissionUtils.Console.print(`${STRIKE}스트라이크`);
    }
    else if (STRIKE > 0 && BALL > 0) {
      MissionUtils.Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
    }
    else if (STRIKE == 0 && BALL > 0) {
      MissionUtils.Console.print(`${BALL}볼`);
    } else {
      MissionUtils.Console.print("낫싱");
    }

    if (STRIKE == 3) {
      this.finishGame();
    } else {
      this.inputFromUser(PC)
    }
  }

  // PC의 랜덤값 정해주는 함수
  getRandomNumber() {
    const RESULT = [];

    while (RESULT.length < 3) {
      const RANDOM_VALUE = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!RESULT.includes(RANDOM_VALUE)) {
        RESULT.push(RANDOM_VALUE);
      }
    }

    return RESULT.join("");
  }

  // 예외처리 함수
  errorHandler(INPUT) {
    return INPUT.length === 3 && INPUT.length === new Set(INPUT).size;
  }

}
module.exports = App;