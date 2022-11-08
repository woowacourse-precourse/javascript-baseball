const MissionUtils = require("@woowacourse/mission-utils");
const isError = require('./errorHandler');

class App {
  play() {
    let FLAG = false;
    let USER_VALUE;
    let SCORE_BOARD = [0, 0];
    let RANDOM_VALUE = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);

    while (FLAG == false) {
      USER_VALUE = this.sliceNumber(this.inputFromUser());
      SCORE_BOARD = this.judgeScore(RANDOM_VALUE, USER_VALUE);

      if (SCORE_BOARD[0] == 3){
        if (this.finishGame()){
          MissionUtils.Console.print("게임을 재시작합니다.\n\n");
          
          // 랜덤값, 사용자 지정값 재설정
          RANDOM_VALUE = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
          USER_VALUE = this.sliceNumber(this.inputFromUser());
        // FLAG를 true로 설정해 반복문 탈출
        } else  FLAG = true;
      } else {
        this.printScore(SCORE_BOARD);
      }
    }
  }

  // 사용자로부터 값 입력받기
  inputFromUser() {
    MissionUtils.Console.readLine('숫자를 입력해주세요.', (INPUT) => {
      let RESULT;
      let errorHandler = new isError(INPUT);

      if(errorHandler.isInputCorrect(INPUT)) {
        throw new Error("입력값이 올바르지 않습니다.");
      } else {
        RESULT = INPUT;
      }

      return RESULT;
    });

    return ;
  }

  // 입력받은 숫자 쪼개기
  sliceNumber(NUM) {
    let RESULT = (NUM + '').split('').map(function(item) {
        return parseInt(item);
      });

    return RESULT;
  }

  // 점수 판정(볼, 스트라이크)
  judgeScore(PC, USER) {
    let SCORE_BOARD = [0, 0];

    for (let i=0; i<3; i++) {
      if (PC[i] == USER[i]) {
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
    let RESTART;
    MissionUtils.Console.readLine("정답입니다. 재도전을 원하시면 1, 게임을 종료하시려면 2를 입력하세요\n", 
      (INPUT) => {RESTART = INPUT});

    if (RESTART == 1) return true;
    else if (RESTART == 2)  return false;
    else  throw new Error("입력값이 올바르지 않습니다.");
  }

  printScore(SCORE_BOARD) {
    let STRIKE = SCORE_BOARD[0];
    let BALL = SCORE_BOARD[1];

    if (STRIKE == 0 && BALL == 0) {
      MissionUtils.Console.print("낫싱");
    } else {
      MissionUtils.Console.print(`${STRIKE}스트라이크 ${BALL}볼`);
    }
  }
}

const app = new App();

app.play();

module.exports = App;
