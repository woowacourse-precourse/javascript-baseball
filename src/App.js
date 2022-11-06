const MissionUtils = require("@woowacourse/mission-utils");
const isError = require('./errorHandler');

class App {
  play() {
    // 3개의 랜덤숫자 생성
    let RANDOM_VALUE = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    let USER_VALUE = this.sliceNumber(this.inputFromUser());

  }

  // 사용자로부터 값 입력받기
  inputFromUser() {
    MissionUtils.Console.readLine('숫자를 입력해주세요.', (USER_INPUT) => {
      let errorHandler = new isError(USER_INPUT);

      if(errorHandler.isInputCorrect(USER_INPUT)) {
        throw new Error("입력값이 올바르지 않습니다.");
      }

      return USER_INPUT;
    });
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

}

const app = new App();

app.play();

module.exports = App;
